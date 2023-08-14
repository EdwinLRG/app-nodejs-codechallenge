
import { HttpResponse } from "./express"
import { Response, Request } from "express"

export const urlNotFound = () => {
    return (_req: Request, res: Response) => {
        notFound("Url not found",res)
    }
}

export const badRequest = (err: string, res: Response) => {
    const code = 400
    const body: HttpResponse<any> = {
        error: err,
        messageId: "BAD_REQUEST",
        message: "There was a bad request",
        statusCode: code,
        success: false
    }

    res.status(code).json(body)
}

export const notFound = (err: string, res: Response) => {
    const code = 404
    const body: HttpResponse<any> = {
        error: err,
        messageId: "NOT_FOUND",
        message: "Resource not found",
        statusCode: code,
        success: false
    }

    res.status(code).json(body)
}

export const unauthorized = (err: string, res: Response) => {
    const code = 401
    const body: HttpResponse<any> = {
        error: err,
        messageId: "UNAUTHORIZED",
        message: "Unauthorized request",
        statusCode: code,
        success: false
    }

    res.status(code).json(body)
}

export const forbidden = (err: string, res: Response) => {
    const code = 403
    const body: HttpResponse<any> = {
        error: err,
        messageId: "FORBIDDEN",
        message: "The request is forbidden",
        statusCode: code,
        success: false
    }

    res.status(code).json(body)
}

export const conflict = (err: string, res: Response) => {
    const code = 409
    const body: HttpResponse<any> = {
        error: err,
        messageId: "CONFLICT",
        message: "There was a conflict request",
        statusCode: code,
        success: false
    }

    res.status(code).json(body)
}

export const internalError = (err: string, res: Response) => {
    const code = 500
    const body: HttpResponse<any> = {
        error: err,
        messageId: "INTERNAL_SERVER_ERROR",
        message: "Internal server error",
        statusCode: code,
        success: false
    }

    res.status(code).json(body)
}

export const statusOk = (data: any, res: Response) => {
    const code = 200
    res.status(code).json(data)
}

export const statusCreated = (data: any, res: Response) => {
    const code = 201
    res.status(code).json(data)
}