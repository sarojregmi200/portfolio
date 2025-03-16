import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const postLists = {
        "title": "My first blog post",
        "date": "2023-01-01",
        "content": "This is my first blog post."
    }

    if (postLists.title === "My first blog post")
        return postLists

    error(404, "Not found");
};
