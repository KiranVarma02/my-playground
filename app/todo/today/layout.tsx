import Todo from "@/app/components/Todo/Todo";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Todo />
        </div>
    );
}