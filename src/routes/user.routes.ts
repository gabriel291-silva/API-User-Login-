import { Router, Request, Response, } from "express";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware/auth";

const router = Router();
const prisma = new PrismaClient();

router.get("/users", authMiddleware, async (req:Request, res:Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
    },
  });

  const usersAnonimizados = users.map((user) => ({
    ...user,
    cpf: `***.${user.cpf.slice(3, 6)}.${user.cpf.slice(6, 9)}-${user.cpf.slice(-2)}`,
  }));

  res.json(usersAnonimizados);
});

export default router;
