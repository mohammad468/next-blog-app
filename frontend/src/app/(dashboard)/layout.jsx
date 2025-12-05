import DashboardLayout from "./DashboardLayout";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
