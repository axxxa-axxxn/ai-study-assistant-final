import { useNavigate } from "react-router-dom";
import {
  Home,
  Bot,
  BookOpen,
  ClipboardList,
  BarChart3,
  User,
  LogOut,
  ArrowLeft,
<<<<<<< HEAD
  GraduationCap,
  Mail,
  ShieldCheck,
  Sparkles,
  BookMarked,
  Trophy,
  Clock,
=======
>>>>>>> origin/main
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const studentName =
    user?.name ||
    user?.username ||
    user?.email?.split("@")[0] ||
    "Student";

  const email = user?.email || "student@example.com";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
<<<<<<< HEAD
    <div className="profile-page">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-sidebar-inner">
          {/* Logo */}
          <div className="profile-sidebar-brand">
            <div className="profile-brand-icon">
              <BookOpen size={21} />
            </div>

            <div>
              <h1 className="profile-brand-title">StudyAI</h1>
              <p className="profile-brand-subtitle">Study smarter</p>
=======
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-gray-100 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <BookOpen size={21} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  StudyAI
                </h1>

                <p className="text-xs text-gray-500">
                  Study smarter
                </p>
              </div>
>>>>>>> origin/main
            </div>
          </div>

          {/* Navigation */}
<<<<<<< HEAD
          <nav className="profile-nav">
            <button
              onClick={() => navigate("/dashboard")}
              className="profile-nav-item"
=======
          <nav className="flex-1 space-y-1 px-4 py-6">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <Home size={20} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate("/ai-assistant")}
<<<<<<< HEAD
              className="profile-nav-item"
=======
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <Bot size={20} />
              <span>AI Assistant</span>
            </button>

            <button
              onClick={() => navigate("/subjects")}
<<<<<<< HEAD
              className="profile-nav-item"
=======
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <BookOpen size={20} />
              <span>Subjects</span>
            </button>

            <button
              onClick={() => navigate("/quizzes")}
<<<<<<< HEAD
              className="profile-nav-item"
=======
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <ClipboardList size={20} />
              <span>Quizzes</span>
            </button>

            <button
              onClick={() => navigate("/progress")}
<<<<<<< HEAD
              className="profile-nav-item"
=======
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <BarChart3 size={20} />
              <span>Progress</span>
            </button>

            <button
              onClick={() => navigate("/profile")}
<<<<<<< HEAD
              className="profile-nav-item profile-nav-item-active"
=======
              className="flex w-full items-center gap-3 rounded-xl bg-indigo-50 px-4 py-3 font-medium text-indigo-600"
>>>>>>> origin/main
            >
              <User size={20} />
              <span>Profile</span>
            </button>
          </nav>

          {/* Logout */}
<<<<<<< HEAD
          <div className="profile-logout-wrap">
            <button
              onClick={handleLogout}
              className="profile-logout"
=======
          <div className="border-t border-gray-100 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-600 transition hover:bg-red-50 hover:text-red-600"
>>>>>>> origin/main
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
<<<<<<< HEAD
      <main className="profile-main">
        {/* Header */}
        <header className="profile-header">
          <div className="profile-header-inner">
            <button
              onClick={() => navigate("/dashboard")}
              className="profile-back"
              aria-label="Back to dashboard"
=======
      <main className="lg:ml-64">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="flex h-20 items-center px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="mr-4 rounded-lg p-2 text-gray-600 hover:bg-gray-100"
>>>>>>> origin/main
            >
              <ArrowLeft size={21} />
            </button>

            <div>
<<<<<<< HEAD
              <p className="profile-header-overline">ACCOUNT</p>

              <h2 className="profile-header-title">
                Profile
              </h2>

              <p className="profile-header-subtitle">
=======
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Profile
              </h2>

              <p className="text-sm text-gray-500">
>>>>>>> origin/main
                Manage your student profile
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
<<<<<<< HEAD
        <div className="profile-content">
          {/* Profile Card */}
          <section className="profile-card">
            {/* Banner */}
            <div className="profile-banner">
              <div className="profile-banner-glow profile-banner-glow-one" />
              <div className="profile-banner-glow profile-banner-glow-two" />

              <div className="profile-banner-pattern">
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* User information */}
            <div className="profile-card-body">
              <div className="profile-identity">
                <div className="profile-avatar">
                  {studentName.charAt(0).toUpperCase()}
                </div>

                <div className="profile-identity-info">
                  <h1>{studentName}</h1>

                  <div className="profile-role">
                    <GraduationCap size={16} />
                    <span>Student</span>
=======
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Profile card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Banner */}
            <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600" />

            {/* User information */}
            <div className="px-6 pb-8 sm:px-8">
              <div className="-mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-indigo-100 text-3xl font-bold text-indigo-600 shadow-sm">
                  {studentName.charAt(0).toUpperCase()}
                </div>

                <div className="pb-1">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {studentName}
                  </h1>

                  <p className="text-sm text-gray-500">
                    Student
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">
                  Personal Information
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Full Name
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {studentName}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-gray-900">
                      {email}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Account Type
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      Student
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Learning Platform
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      AI Study Assistant
                    </p>
>>>>>>> origin/main
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Personal Information */}
              <div className="profile-section">
                <div className="profile-section-heading">
                  <div className="profile-section-icon">
                    <User size={18} />
                  </div>

                  <div>
                    <h3>Personal Information</h3>
                    <p>Your account details</p>
                  </div>
                </div>

                <div className="profile-details-grid">
                  <div className="profile-detail">
                    <div className="profile-detail-icon profile-detail-icon-indigo">
                      <User size={18} />
                    </div>

                    <div>
                      <p className="profile-detail-label">
                        Full Name
                      </p>

                      <p className="profile-detail-value">
                        {studentName}
                      </p>
                    </div>
                  </div>

                  <div className="profile-detail">
                    <div className="profile-detail-icon profile-detail-icon-blue">
                      <Mail size={18} />
                    </div>

                    <div>
                      <p className="profile-detail-label">
                        Email
                      </p>

                      <p className="profile-detail-value profile-detail-email">
                        {email}
                      </p>
                    </div>
                  </div>

                  <div className="profile-detail">
                    <div className="profile-detail-icon profile-detail-icon-purple">
                      <ShieldCheck size={18} />
                    </div>

                    <div>
                      <p className="profile-detail-label">
                        Account Type
                      </p>

                      <p className="profile-detail-value">
                        Student
                      </p>
                    </div>
                  </div>

                  <div className="profile-detail">
                    <div className="profile-detail-icon profile-detail-icon-green">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="profile-detail-label">
                        Learning Platform
                      </p>

                      <p className="profile-detail-value">
                        AI Study Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Study Statistics */}
              <div className="profile-section">
                <div className="profile-section-heading">
                  <div className="profile-section-icon">
                    <BarChart3 size={18} />
                  </div>

                  <div>
                    <h3>Study Statistics</h3>
                    <p>A snapshot of your learning activity</p>
                  </div>
                </div>

                <div className="profile-stats">
                  <div className="profile-stat-card">
                    <div className="profile-stat-icon profile-stat-icon-blue">
                      <BookMarked size={19} />
                    </div>

                    <div>
                      <p className="profile-stat-label">
                        Subjects
                      </p>

                      <p className="profile-stat-value">
                        3
                      </p>
                    </div>
                  </div>

                  <div className="profile-stat-card">
                    <div className="profile-stat-icon profile-stat-icon-purple">
                      <Trophy size={19} />
                    </div>

                    <div>
                      <p className="profile-stat-label">
                        Quizzes
                      </p>

                      <p className="profile-stat-value">
                        12
                      </p>
                    </div>
                  </div>

                  <div className="profile-stat-card">
                    <div className="profile-stat-icon profile-stat-icon-green">
                      <Clock size={19} />
                    </div>

                    <div>
                      <p className="profile-stat-label">
                        Study Hours
                      </p>

                      <p className="profile-stat-value">
                        28.5
                      </p>
                    </div>
=======
              {/* Study statistics */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">
                  Study Statistics
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-sm text-gray-500">
                      Subjects
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      3
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-sm text-gray-500">
                      Quizzes
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      12
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-sm text-gray-500">
                      Study Hours
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      28.5
                    </p>
>>>>>>> origin/main
                  </div>
                </div>
              </div>

              {/* Actions */}
<<<<<<< HEAD
              <div className="profile-actions">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="profile-dashboard-button"
                >
                  Back to Dashboard
                  <ArrowLeft size={18} />
=======
              <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Back to Dashboard
>>>>>>> origin/main
                </button>

                <button
                  onClick={handleLogout}
<<<<<<< HEAD
                  className="profile-logout-button"
=======
                  className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50"
>>>>>>> origin/main
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
<<<<<<< HEAD
          </section>

          {/* Bottom note */}
          <div className="profile-footer-note">
            <div className="profile-footer-icon">
              <Sparkles size={17} />
            </div>

            <div>
              <strong>Keep learning, {studentName}!</strong>
              <span>
                Your progress and study activity will continue to grow as
                you learn.
              </span>
            </div>
=======
>>>>>>> origin/main
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;