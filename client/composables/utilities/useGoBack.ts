import { useRouter } from "@nuxtjs/composition-api";

export const useGoBack = () => {
    const router = useRouter();

    const goBack = (): void => {
        router.go(-1);
    }

    return goBack
}