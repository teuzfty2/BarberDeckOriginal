import type { User } from "../../../../store/auth";

export interface MockUser extends User {
    password?: string;
}

export const mockUser: MockUser[] = [
    {
    userId: "1",
    name: "Matheus",
    email: "dev@teste.com",
    password: "123",
    status: "DEV",
    },
];