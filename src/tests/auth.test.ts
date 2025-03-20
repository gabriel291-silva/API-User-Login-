import request from "supertest";
import { app } from "../server";

describe("Testes de Autenticação", () => {
  it("Registra um usuario", async () => {
    const res = await request(app).post("/register").send({
      name: "Testes",
      email: "teste@example.com",
      password: "123456",
      cpf: "12345678900",
    });

    expect(res.status).toBe(201);
  });

  it("Realiza o Login e Retorna um Token", async () => {
    const res = await request(app).post("/login").send({
      email: "teste@example.com",
      password: "123456",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
