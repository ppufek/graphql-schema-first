import User from '../types/User.type'

export function user(parent: any, args: { id: string }, context: any, info: any): User | null {
    console.log(args.id)
    return null
}

export function users(): User[] {
    return []
}

