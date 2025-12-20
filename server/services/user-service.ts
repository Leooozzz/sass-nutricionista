import { prisma } from "../libs/prisma";
import { compare, hash } from "bcrypt";
import { configDotenv } from "dotenv";
import { createJWT } from "../libs/jwt";

configDotenv();

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existing = await prisma.user.findUnique({
    where: { email },
  });
  if (existing) return null;
  const hashPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email: email.toLocaleLowerCase(), password: hashPassword },
  });
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email: email.toLocaleLowerCase() },
  });
  if (!user) return null;
  const validPassword = await compare(password, user.password);
  if (!validPassword) return null;
  const token = createJWT(user.id);
  return { token, user: { id: user.id , name:user.name, email:user.email, role:user.role} };
};
