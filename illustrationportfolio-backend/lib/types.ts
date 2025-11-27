export interface Image {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    ownerId: string;
    onwerEmail: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    userId: string;
    email: string;
    canView: boolean;
    canEdit: boolean;
}

export interface Portfolio {
    id: string;
    title: string;
    description: string;
    ownerId: string;
    ownerEmail: string;
    images: Image[];
    permissions: User[];
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}