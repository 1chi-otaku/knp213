import fetch from 'node-fetch';

class JsonServerClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getProducts() {
    try {
      const response = await fetch(`${this.baseUrl}/products`);
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return null;
    }
  }

  async addProduct(productData) {
    try {
      const response = await fetch(`${this.baseUrl}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const product = await response.json();
      return product;
    } catch (error) {
      console.error('Error adding product:', error);
      return null;
    }
  }

  async updateProduct(productId, updatedData) {
    try {
      const response = await fetch(`${this.baseUrl}/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const product = await response.json();
      return product;
    } catch (error) {
      console.error(`Error updating product ${productId}:`, error);
      return null;
    }
  }

  async deleteProduct(productId) {
    try {
      const response = await fetch(`${this.baseUrl}/products/${productId}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (error) {
      console.error(`Error deleting product ${productId}:`, error);
      return false;
    }
  }
}

const client = new JsonServerClient('http://localhost:3000');

async function main() {
  const products = await client.getProducts();
  console.log('Products:', products);

  const newProduct = { name: 'New Product', price: 30 };
  const addedProduct = await client.addProduct(newProduct);
  console.log('Added Product:', addedProduct);

  const productIdToUpdate = 1;
  const updatedData = { name: 'Updated Product', price: 50 };
  const updatedProduct = await client.updateProduct(productIdToUpdate, updatedData);
  console.log(`Updated Product ${productIdToUpdate}:`, updatedProduct);

  const productIdToDelete = 2;
  const deletionSuccessful = await client.deleteProduct(productIdToDelete);
  console.log(`Deletion of Product ${productIdToDelete} successful:`, deletionSuccessful);
}

main();
