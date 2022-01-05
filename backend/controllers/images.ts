import { Request, Response, NextFunction } from 'express';
import { getRepository, MoreThan } from 'typeorm';

import Image from '../entities/image'

type GetPrams = {
    id: string
}

interface GetQuery {
    cursor?: string,
    limit?: string
}

interface GetListResponse {
    status: "OK" | "error",
    cursor: number,
    limit: number,
    images: Image[]
    nextCursor?: number
}

export const list = async (req: Request<unknown, GetListResponse, any, GetQuery>, res: Response<GetListResponse>, next: NextFunction) => {
    try {
        const imageRepository = getRepository(Image);
        const { query: { cursor: c = "0", limit: l = "100"} } = req;
        const [cursor, limit] = [c, l].map(i => parseInt(i, 10));
        const images = await imageRepository.find({where: {id: MoreThan(cursor)}, take: limit});
        res.json({
            status: "OK",
            cursor,
            limit,
            images,
            nextCursor: images.at(-1)?.id
        });
    } catch (e) {
        next(e)
    }
}

export const get = async (req: Request<GetPrams>, res: Response, next: NextFunction) => {
    try {
        const imageRepository = getRepository(Image);
        console.log(req.params);
        const image = await imageRepository.findOne({where: req.params});
        res.json(image);
    } catch (e) {
        next(e)
    }
}