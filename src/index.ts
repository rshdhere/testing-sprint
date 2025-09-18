import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/sum', (req: Request, res: Response) => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a + b;

    res.json({sum: result})
})

app.listen(3000);