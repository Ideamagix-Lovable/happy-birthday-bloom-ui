import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ProductInventory } from '@/types/campaign';

interface ProductInventoryTableProps {
  products: ProductInventory[];
}

export const ProductInventoryTable: React.FC<ProductInventoryTableProps> = ({ products }) => {
  const getAvailabilityStatus = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return 'success';
    if (percentage > 20) return 'warning';
    return 'destructive';
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead className="text-right">Total Inventory</TableHead>
            <TableHead className="text-right">Assigned Inventory</TableHead>
            <TableHead className="text-right">Available Inventory</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.productName}</TableCell>
              <TableCell className="text-right">{product.totalInventory.toLocaleString()}</TableCell>
              <TableCell className="text-right">{product.assignedInventory.toLocaleString()}</TableCell>
              <TableCell className="text-right font-semibold">
                {product.availableInventory.toLocaleString()}
              </TableCell>
              <TableCell>
                <Badge 
                  variant={
                    getAvailabilityStatus(product.availableInventory, product.totalInventory) === 'success' 
                      ? 'default' 
                      : getAvailabilityStatus(product.availableInventory, product.totalInventory) === 'warning'
                      ? 'secondary'
                      : 'destructive'
                  }
                >
                  {((product.availableInventory / product.totalInventory) * 100).toFixed(0)}% Available
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
