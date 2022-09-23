import { Navigation } from "@components/Navigation";
import { Timeline } from "@components/Timeline";
import { motion } from "framer-motion";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navigation />
      <Timeline data={data.posts_by_date} />
    </motion.main>
  );
}
