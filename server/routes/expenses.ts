import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string(),
  amount: z.number(),
});

const addExpenseSchema = expenseSchema.omit({ id: true });

const mockExpenses: Expense[] = [
  { id: 1, title: "Groceries", amount: 50 },
  { id: 2, title: "Rent", amount: 500 },
  { id: 3, title: "Utilities", amount: 100 },
  { id: 4, title: "Entertainment", amount: 70 },
];

export const expenseRoute = new Hono()
  .get("/", (c) => {
    return c.json({
      expenses: mockExpenses,
    });
  })
  .get("/total-spent", (c) => {
    const total = mockExpenses.reduce(
      (acc, expense) => acc + expense.amount,
      0,
    );
    return c.json({
      total: total,
    });
  })
  .post("/", zValidator("json", addExpenseSchema), async (c) => {
    const expense = c.req.valid("json");
    mockExpenses.push({ ...expense, id: mockExpenses.length + 1 });
    c.status(201);
    return c.json({ expense });
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = mockExpenses.find((expense) => expense.id === id);
    if (!expense) {
      return c.notFound();
    }
    return c.json({ expense });
  })
  .delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const index = mockExpenses.findIndex((expense) => expense.id === id);
    if (!index) {
      return c.notFound();
    }
    const deletedExpense = mockExpenses.splice(index, 1)[0];
    return c.json({ expense: deletedExpense });
  });
// TODO: .put
