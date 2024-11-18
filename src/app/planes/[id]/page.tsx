"use client";
import { useParams } from "next/navigation";

interface Params {
    id?: string;
}

const SlugWithIdPage = () => {
    const { id } = useParams() as Params;

    return (
        <main>
            <h1>Slug with ID Page</h1>
            <p>
                You with ID: <strong>{id}</strong>
            </p>
        </main>
    );
};

export default SlugWithIdPage;
