import FilterButtons from "@/components/FilterButtons";
import Header from "@/components/Header";
import InputTask from "@/components/InputTask";
import ListTasks from "@/components/ListTasks";

export default function Home() {
  return (
    <main className="relative font-[family-name:var(--font-josefin-sans)] md:flex justify-center">
      <Header />
      <section className="absolute top-40 mx-6 w-[87%] md:w-[52%]">
        <InputTask />
        <ListTasks />
        <div className="md:hidden">
          <FilterButtons />
        </div>
      </section>
    </main>
  );
}
