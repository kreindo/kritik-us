const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative mx-auto min-h-screen max-w-md bg-[#f2f2f2]`}
    >
      <main className="px-6 py-4">{children}</main>
    </div>
  );
};

export default Layout;
