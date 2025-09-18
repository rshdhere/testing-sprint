import express, { Request, Response } from 'express';

export const app = express();
app.use(express.json());

app.post('/sum', (req: Request, res: Response) => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a + b;

    res.json({answer: result})
})

app.post('/multiply', (req: Request, res: Response) => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a * b;

    res.json({answer: result})
})