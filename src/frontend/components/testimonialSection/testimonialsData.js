import useFetchData from "../../apiHooks/useFetchData"

export const TestimonialsData = () => {
    const { data, loading, error } = useFetchData("testimonials")
    return {data};
}