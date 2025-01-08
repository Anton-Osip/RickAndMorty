import type {NextApiRequest, NextApiResponse} from 'next'

type Data = { id: number, title: string }

const booksDB: Data[] = [
    {id: 1, title: "John"},
    {id: 2, title: "Anton"},
    {id: 3, title: "Vikrum"},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    if (req.method === 'GET') {
        let books: Data[] = booksDB
        const term = req.query.term as string
        if (term){
            books=books.filter((book: Data) => book.title.toLowerCase().includes(term.toLowerCase()))
        }
            res.status(200).json(books)
    }

}
