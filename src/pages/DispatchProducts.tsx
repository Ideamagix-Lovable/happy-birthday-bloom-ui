
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Plus, Package, DollarSign, Activity, AlertTriangle } from 'lucide-react';

const DispatchProducts = () => {
  const productsData = [
    { sku: 'IB-1000081', name: 'RN25-Ram Lalla Deity', status: 'Active', category: 'Campaign Gift', subCategory: '-', productType: 'Campaign Gift', basePrice: 255, sellingPrice: 300, quantity: 2338, sendOnce: 'No' },
    { sku: 'IB-1000080', name: 'RN25-Ayodhya Bliss RR Agarbatti 50gm', status: 'Active', category: 'Agarbatti', subCategory: '-', productType: 'Campaign Gift', basePrice: 120, sellingPrice: 150, quantity: 4008, sendOnce: 'Yes' },
    { sku: 'IB-1000079', name: 'Vrindavan Flora Agarbatti', status: 'Active', category: 'Agarbatti', subCategory: '-', productType: 'Regular Dispatch', basePrice: 80, sellingPrice: 80, quantity: 2, sendOnce: 'Yes' },
    { sku: 'IB-1000078', name: 'Nidhivan Flora', status: 'Active', category: 'Agarbatti', subCategory: '-', productType: 'Regular Dispatch', basePrice: 140, sellingPrice: 140, quantity: 18, sendOnce: 'Yes' },
    { sku: 'IB-1000077', name: 'Goloka Flora Agarbatti', status: 'Active', category: 'Agarbatti', subCategory: '-', productType: 'Regular Dispatch', basePrice: 140, sellingPrice: 140, quantity: 1, sendOnce: 'Yes' },
    { sku: 'IB-1000076', name: 'A Beginner\'s Guide to Krishna Consciousness Book', status: 'Active', category: 'Small Book', subCategory: '-', productType: 'Regular Dispatch', basePrice: 20, sellingPrice: 25, quantity: 1984, sendOnce: 'Yes' },
    { sku: 'IB-1000075', name: 'Gita Saar Book (Hindi Book)', status: 'Not Active', category: 'Small Book', subCategory: '-', productType: 'Regular Dispatch', basePrice: 18, sellingPrice: 20, quantity: 5, sendOnce: 'Yes' },
    { sku: 'IB-1000074', name: 'On The Way to Krishna Book (Gujarati)', status: 'Not Active', category: 'Small Book', subCategory: '-', productType: 'Regular Dispatch', basePrice: 18, sellingPrice: 20, quantity: 2, sendOnce: 'Yes' },
    { sku: 'IB-1000073', name: 'Blue Lavender Flora Agarbatti', status: 'Active', category: 'Agarbatti', subCategory: '-', productType: 'Regular Dispatch', basePrice: 90, sellingPrice: 100, quantity: 34, sendOnce: 'Yes' },
    { sku: 'IB-1000072', name: 'Kesar Chandan Flora Agarbatti', status: 'Active', category: 'Agarbatti', subCategory: '-', productType: 'Regular Dispatch', basePrice: 70, sellingPrice: 80, quantity: 1, sendOnce: 'Yes' }
  ];

  const productStats = {
    totalProducts: 80,
    activeProducts: 68,
    inactiveProducts: 12,
    lowStockProducts: 8,
    totalValue: 2450000
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
              <p className="text-gray-600">Product Management and Inventory</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Products
              </Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90 flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>

          {/* Product Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{productStats.totalProducts}</div>
                <p className="text-xs text-muted-foreground">In catalog</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{productStats.activeProducts}</div>
                <p className="text-xs text-muted-foreground">{Math.round((productStats.activeProducts / productStats.totalProducts) * 100)}% of total</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Inactive Products</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{productStats.inactiveProducts}</div>
                <p className="text-xs text-muted-foreground">Need attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{productStats.lowStockProducts}</div>
                <p className="text-xs text-muted-foreground">Reorder required</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">₹{(productStats.totalValue / 100000).toFixed(1)}L</div>
                <p className="text-xs text-muted-foreground">Inventory value</p>
              </CardContent>
            </Card>
          </div>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Product Catalog</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>SKU</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Product Type</TableHead>
                      <TableHead>Base Price</TableHead>
                      <TableHead>Selling Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Send Once</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productsData.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{product.sku}</TableCell>
                        <TableCell className="max-w-xs">{product.name}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {product.status}
                          </span>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.productType}</TableCell>
                        <TableCell>₹{product.basePrice}</TableCell>
                        <TableCell>₹{product.sellingPrice}</TableCell>
                        <TableCell>
                          <span className={`${product.quantity < 10 ? 'text-red-600 font-medium' : ''}`}>
                            {product.quantity}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.sendOnce === 'Yes' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {product.sendOnce}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Showing 1-10 of 80 products</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchProducts;
