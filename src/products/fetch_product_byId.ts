import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Interface for the request body when creating a product
interface CreateProductRequest {
  name: string;
  description: string;
  quantity: number;
  price: number;
  available: number;
  category: 'GROCERY' | 'AUTO' | 'FOOD' | 'CLOTHES';
  userId?: number;
}

// Endpoint to create a new product
router.post('/create', async (req: Request, res: Response) => {
  const { name, description, quantity, price, available, category, userId }: CreateProductRequest = req.body;

  try {
    const product = await prisma.products.create({
      data: {
        name,
        description,
        quantity,
        price,
        available,
        category,
        userId,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Endpoint to retrieve a product by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await prisma.products.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
}); 

// router.get('/all', async (_req: Request, res: Response) => {
//   try {
//     const products = await prisma.products.findMany();
//     res.status(200).json(products);
//   } catch{}
// }
// );

export default router;
