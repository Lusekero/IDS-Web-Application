import { useRouter } from "@nuxtjs/composition-api";

export const usePushRoute = () => {
    const router = useRouter();

    const pushRoute = (url: string): void => {
        router.push(url);
    }

    return pushRoute
}