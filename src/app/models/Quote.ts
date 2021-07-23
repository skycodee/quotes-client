import { Category } from "./Category";
import { Comment } from "./Comment";

export class Quote {
    id: number;
    quoteNarrator: string;
    quoteText: string;
    quoteDate: Date;

    comments: Comment[];
    categories: Category[];
}