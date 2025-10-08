import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ProductInventory } from '@/types/campaign';

interface ProductInventoryTableProps {
  products: ProductInventory[];
}

export const ProductInventoryTable: React.FC<ProductInventoryTableProps> = ({ products }) => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead className="text-right">Total Inventory</TableHead>
            <TableHead className="text-right">Assigned Inventory</TableHead>
            <TableHead className="text-right">Available Inventory</TableHead>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
