import { useState } from "react";
<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> origin/main

import {
  Home,
  Bot,
  BookOpen,
  ClipboardList,
  BarChart3,
  User,
  LogOut,
  Menu,
  X,
  Bell,
<<<<<<< HEAD
  Clock3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Play,
  Brain,
  Trophy,
  Target,
  ChevronRight,
  Zap,
=======
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
>>>>>>> origin/main
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const location = useLocation();
=======
>>>>>>> origin/main

  const { user, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
<<<<<<< HEAD
  const [showNotifications, setShowNotifications] = useState(false);
=======
>>>>>>> origin/main

  const studentName =
    user?.name ||
    user?.username ||
    user?.email?.split("@")[0] ||
    "Student";

<<<<<<< HEAD
  const firstName = studentName.split(" ")[0];
=======
  // --------------------------------------------------
  // Dummy frontend data
  // --------------------------------------------------
>>>>>>> origin/main

  const subjects = [
    {
      name: "Computer Organization & Assembly Language",
      shortName: "COAL",
      progress: 78,
      topics: "12 / 15 topics",
<<<<<<< HEAD
      color: "indigo",
=======
>>>>>>> origin/main
    },
    {
      name: "Information & Communication Technology",
      shortName: "ICT",
      progress: 65,
      topics: "10 / 15 topics",
<<<<<<< HEAD
      color: "cyan",
=======
>>>>>>> origin/main
    },
    {
      name: "Programming Fundamentals",
      shortName: "PF",
      progress: 52,
      topics: "8 / 15 topics",
<<<<<<< HEAD
      color: "violet",
=======
>>>>>>> origin/main
    },
  ];

  const recentActivity = [
    {
      title: "COAL - Memory Organization",
      type: "Study Session",
      time: "Today, 10:30 AM",
<<<<<<< HEAD
      icon: BookOpen,
=======
>>>>>>> origin/main
    },
    {
      title: "ICT - Networking Basics",
      type: "Quiz Completed",
      time: "Yesterday, 4:15 PM",
<<<<<<< HEAD
      icon: CheckCircle2,
=======
>>>>>>> origin/main
    },
    {
      title: "PF - Functions",
      type: "Study Session",
      time: "Yesterday, 11:20 AM",
<<<<<<< HEAD
      icon: Brain,
=======
>>>>>>> origin/main
    },
  ];

  const quizzes = [
    {
      title: "COAL Chapter 3 Quiz",
      questions: 15,
      score: "85%",
    },
    {
      title: "ICT Networking Quiz",
      questions: 20,
      score: "78%",
    },
<<<<<<< HEAD
    {
      title: "PF Functions Quiz",
      questions: 10,
      score: "82%",
    },
  ];

=======
  ];

  // --------------------------------------------------
  // Sidebar navigation
  // --------------------------------------------------

>>>>>>> origin/main
  const navigation = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "AI Study Assistant",
      icon: Bot,
      path: "/ai-assistant",
<<<<<<< HEAD
      special: true,
=======
>>>>>>> origin/main
    },
    {
      name: "Subjects",
      icon: BookOpen,
      path: "/subjects",
    },
    {
      name: "Quizzes",
      icon: ClipboardList,
      path: "/quizzes",
    },
    {
      name: "Progress",
      icon: BarChart3,
      path: "/progress",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

<<<<<<< HEAD
=======
  // --------------------------------------------------
  // Navigation handler
  // --------------------------------------------------

>>>>>>> origin/main
  const handleNavigation = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

<<<<<<< HEAD
=======
  // --------------------------------------------------
  // Logout
  // --------------------------------------------------

>>>>>>> origin/main
  const handleLogout = () => {
    setSidebarOpen(false);
    logout();
  };

  return (
<<<<<<< HEAD
    <div className="dashboard-shell">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="dashboard-overlay"
=======
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ==================================================
          MOBILE OVERLAY
      ================================================== */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
>>>>>>> origin/main
          onClick={() => setSidebarOpen(false)}
        />
      )}

<<<<<<< HEAD
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "dashboard-sidebar-open" : ""
        }`}
      >
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Bot size={23} />
          </div>

          <div>
            <h1>AI Study</h1>
            <span>Assistant</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={21} />
          </button>
        </div>

        <div className="sidebar-label">MAIN MENU</div>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
=======
      {/* ==================================================
          SIDEBAR
      ================================================== */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Bot size={25} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                AI Study
              </h1>

              <p className="text-xs text-slate-500">
                Assistant
              </p>
            </div>
          </div>

          {/* Mobile close */}
          <button
            className="text-slate-500 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={23} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon;
>>>>>>> origin/main

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
<<<<<<< HEAD
                className={`sidebar-link ${
                  active ? "sidebar-link-active" : ""
                } ${item.special ? "sidebar-ai-link" : ""}`}
              >
                <span className="sidebar-link-icon">
                  <Icon size={19} />
                </span>

                <span>{item.name}</span>

                {item.special && <Sparkles size={14} />}
=======
                className="flex w-full items-center gap-3 rounded-xl bg-transparent px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                <Icon size={20} />

                <span>{item.name}</span>
>>>>>>> origin/main
              </button>
            );
          })}
        </nav>

<<<<<<< HEAD
        {/* AI promo */}
        <div className="sidebar-ai-card">
          <div className="sidebar-ai-sparkle">
            <Sparkles size={17} />
          </div>

          <h3>Study smarter</h3>

          <p>
            Get help from your AI study companion anytime.
          </p>

          <button onClick={() => handleNavigation("/ai-assistant")}>
            Try AI Assistant
            <ArrowRight size={15} />
          </button>
        </div>

        {/* User */}
        <div className="sidebar-bottom">
          <button
            className="sidebar-user"
            onClick={() => handleNavigation("/profile")}
          >
            <div className="user-avatar">
              {studentName.charAt(0).toUpperCase()}
            </div>

            <div className="sidebar-user-info">
              <strong>{studentName}</strong>
              <span>Student</span>
            </div>

            <ChevronRight size={16} />
          </button>

          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={18} />
            Logout
=======
        {/* User / Logout */}
        <div className="border-t border-slate-200 p-4">
          <button
            onClick={() => handleNavigation("/profile")}
            className="mb-3 flex w-full items-center gap-3 rounded-xl bg-slate-50 p-3 text-left transition hover:bg-indigo-50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
              {studentName.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                {studentName}
              </p>

              <p className="truncate text-xs text-slate-500">
                Student
              </p>
            </div>
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={20} />

            <span>Logout</span>
>>>>>>> origin/main
          </button>
        </div>
      </aside>

<<<<<<< HEAD
      {/* ================= MAIN ================= */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button
              className="mobile-menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={23} />
            </button>

            <div>
              <span className="header-overline">STUDENT PORTAL</span>
              <h2>Dashboard</h2>
            </div>
          </div>

          <div className="header-right">
            <div className="notification-wrapper">
              <button
                className="notification-button"
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
              >
                <Bell size={19} />
                <span className="notification-dot" />
              </button>

              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="notification-heading">
                    <strong>Notifications</strong>
                    <span>3</span>
                  </div>

                  <div className="notification-item">
                    <div className="notification-icon">
                      <Trophy size={15} />
                    </div>

                    <div>
                      <strong>Great progress!</strong>
                      <p>You completed a quiz.</p>
                    </div>
                  </div>

                  <div className="notification-item">
                    <div className="notification-icon">
                      <Target size={15} />
                    </div>

                    <div>
                      <strong>Keep your streak</strong>
                      <p>Study today to stay on track.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              className="header-profile"
              onClick={() => navigate("/profile")}
            >
              <div className="header-avatar">
                {studentName.charAt(0).toUpperCase()}
              </div>

              <div className="header-profile-text">
                <strong>{studentName}</strong>
                <span>Student</span>
              </div>
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          {/* ================= HERO ================= */}
          <section className="dashboard-hero">
            <div className="hero-decoration hero-decoration-one" />
            <div className="hero-decoration hero-decoration-two" />

            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Your learning journey
              </div>

              <h1>
                Welcome back,{" "}
                <span>{firstName}!</span>
              </h1>

              <p>
                Continue your learning journey and keep building
                your knowledge one step at a time.
              </p>

              <div className="hero-actions">
                <button
                  className="hero-primary-button"
                  onClick={() => navigate("/subjects")}
                >
                  <Play size={17} fill="currentColor" />
                  Continue Learning
                </button>

                <button
                  className="hero-secondary-button"
                  onClick={() => navigate("/ai-assistant")}
                >
                  <Sparkles size={17} />
                  Ask AI
                </button>
              </div>
            </div>

            <div className="hero-illustration">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-brain">
                <Brain size={65} />
              </div>

              <div className="floating-card floating-card-one">
                <CheckCircle2 size={17} />
                <span>68% Progress</span>
              </div>

              <div className="floating-card floating-card-two">
                <Zap size={16} />
                <span>Keep going!</span>
              </div>
            </div>
          </section>

          {/* ================= STATS ================= */}
          <section className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon stat-icon-indigo">
                <BookOpen size={21} />
              </div>

              <div>
                <span>Subjects</span>
                <strong>3</strong>
              </div>

              <div className="stat-trend">
                <ArrowRight size={15} />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-icon-green">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <span>Quizzes Completed</span>
                <strong>12</strong>
              </div>

              <div className="stat-trend">
                <ArrowRight size={15} />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-icon-orange">
                <Clock3 size={21} />
              </div>

              <div>
                <span>Study Hours</span>
                <strong>28.5</strong>
              </div>

              <div className="stat-trend">
                <ArrowRight size={15} />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-icon-purple">
                <BarChart3 size={21} />
              </div>

              <div>
                <span>Overall Progress</span>
                <strong>68%</strong>
              </div>

              <div className="stat-trend">
                <ArrowRight size={15} />
              </div>
            </div>
          </section>

          {/* ================= QUICK ACTIONS ================= */}
          <section className="section-block">
            <div className="section-heading">
              <div>
                <span className="section-kicker">GET STARTED</span>
                <h2>Quick Actions</h2>
              </div>

              <p>Jump into your study tools</p>
            </div>

            <div className="quick-actions">
              <button
                className="quick-action quick-action-ai"
                onClick={() => navigate("/ai-assistant")}
              >
                <div className="quick-action-icon">
                  <Sparkles size={22} />
                </div>

                <div>
                  <strong>Ask AI Assistant</strong>
                  <span>Get instant study help</span>
                </div>

                <ArrowRight size={18} />
              </button>

              <button
                className="quick-action"
                onClick={() => navigate("/subjects")}
              >
                <div className="quick-action-icon">
                  <BookOpen size={22} />
                </div>

                <div>
                  <strong>Explore Subjects</strong>
                  <span>Continue your courses</span>
                </div>

                <ArrowRight size={18} />
              </button>

              <button
                className="quick-action"
                onClick={() => navigate("/quizzes")}
              >
                <div className="quick-action-icon">
                  <ClipboardList size={22} />
                </div>

                <div>
                  <strong>Take a Quiz</strong>
                  <span>Test your knowledge</span>
                </div>

                <ArrowRight size={18} />
              </button>

              <button
                className="quick-action"
                onClick={() => navigate("/progress")}
              >
                <div className="quick-action-icon">
                  <BarChart3 size={22} />
                </div>

                <div>
                  <strong>View Progress</strong>
                  <span>Track your performance</span>
                </div>

=======
      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="lg:ml-72">
        {/* ==================================================
            TOP HEADER
        ================================================== */}

        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            <div>
              <p className="text-sm text-slate-500">
                Student Dashboard
              </p>

              <h2 className="font-semibold text-slate-900">
                AI Study Assistant
              </h2>
            </div>
          </div>

          {/* Notification */}
          <button
            className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100"
            aria-label="Notifications"
          >
            <Bell size={21} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* ==================================================
              WELCOME
          ================================================== */}

          <section className="mb-8">
            <p className="mb-1 text-sm font-medium text-indigo-600">
              Welcome back 👋
            </p>

            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Hello, {studentName}!
            </h1>

            <p className="mt-2 text-slate-500">
              Keep learning and make progress toward your
              academic goals.
            </p>
          </section>

          {/* ==================================================
              STATS
          ================================================== */}

          <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Subjects */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <BookOpen size={22} />
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Subjects
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                3
              </h3>
            </div>

            {/* Quizzes */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-green-50 p-3 text-green-600">
                  <CheckCircle size={22} />
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Quizzes Completed
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                12
              </h3>
            </div>

            {/* Study Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
                  <Clock size={22} />
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Study Hours
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                28.5
              </h3>
            </div>

            {/* Overall Progress */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                  <BarChart3 size={22} />
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Overall Progress
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                68%
              </h3>
            </div>
          </section>

          {/* ==================================================
              AI ASSISTANT
          ================================================== */}

          <section className="mb-8 overflow-hidden rounded-2xl bg-indigo-600 p-6 text-white shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={20} />

                  <span className="text-sm font-semibold">
                    AI STUDY ASSISTANT
                  </span>
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Need help with your studies?
                </h2>

                <p className="mt-3 text-indigo-100">
                  Ask questions, understand difficult concepts,
                  generate study material, or prepare for your
                  next quiz.
                </p>
              </div>

              <button
                onClick={() => navigate("/ai-assistant")}
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
              >
                <Bot size={20} />

                Ask AI Assistant

>>>>>>> origin/main
                <ArrowRight size={18} />
              </button>
            </div>
          </section>

<<<<<<< HEAD
          {/* ================= SUBJECTS + PROGRESS ================= */}
          <section className="dashboard-grid-two">
            {/* Subjects */}
            <div className="dashboard-card">
              <div className="card-heading">
                <div>
                  <span className="section-kicker">YOUR COURSES</span>
                  <h2>My Subjects</h2>
                </div>

                <button onClick={() => navigate("/subjects")}>
                  View all <ArrowRight size={15} />
                </button>
              </div>

              <div className="subject-list">
                {subjects.map((subject) => (
                  <button
                    key={subject.shortName}
                    className="subject-row"
                    onClick={() => navigate("/subjects")}
                  >
                    <div className={`subject-avatar ${subject.color}`}>
                      {subject.shortName}
                    </div>

                    <div className="subject-information">
                      <div className="subject-title-row">
                        <strong>{subject.name}</strong>
                        <span>{subject.progress}%</span>
                      </div>

                      <div className="subject-progress">
                        <div
                          style={{
                            width: `${subject.progress}%`,
                          }}
                        />
                      </div>

                      <small>{subject.topics}</small>
                    </div>
                  </button>
=======
          {/* ==================================================
              SUBJECTS + PROGRESS
          ================================================== */}

          <section className="mb-8 grid gap-6 xl:grid-cols-2">
            {/* Subjects */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    My Subjects
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Track your learning progress
                  </p>
                </div>

                <button
                  onClick={() => navigate("/subjects")}
                  className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                >
                  View all
                </button>
              </div>

              <div className="space-y-5">
                {subjects.map((subject) => (
                  <div key={subject.shortName}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
                          {subject.shortName}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {subject.name}
                          </p>

                          <p className="text-xs text-slate-500">
                            {subject.topics}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        {subject.progress}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                        style={{
                          width: `${subject.progress}%`,
                        }}
                      />
                    </div>
                  </div>
>>>>>>> origin/main
                ))}
              </div>
            </div>

            {/* Progress */}
<<<<<<< HEAD
            <div className="dashboard-card progress-card">
              <div className="card-heading">
                <div>
                  <span className="section-kicker">PERFORMANCE</span>
                  <h2>Progress Overview</h2>
                </div>

                <div className="progress-icon">
                  <Target size={18} />
                </div>
              </div>

              <div className="progress-main">
                <div
                  className="progress-ring"
                  style={{
                    "--progress": "68%",
                  }}
                >
                  <div className="progress-ring-inner">
                    <strong>68%</strong>
                    <span>Overall</span>
                  </div>
                </div>

                <div className="progress-message">
                  <strong>You're doing great!</strong>
                  <p>
                    Keep studying consistently to reach your
                    academic goals.
                  </p>

                  <button onClick={() => navigate("/progress")}>
                    Detailed analytics
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              <div className="progress-metrics">
                <div>
                  <strong>24</strong>
                  <span>Topics</span>
                </div>

                <div>
                  <strong>12</strong>
                  <span>Quizzes</span>
                </div>

                <div>
                  <strong>82%</strong>
                  <span>Avg. Score</span>
                </div>
=======
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Progress Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your overall academic performance
                </p>
              </div>

              <div className="flex flex-col items-center justify-center py-3">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-indigo-100">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-900">
                      68%
                    </p>

                    <p className="text-xs text-slate-500">
                      Overall
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid w-full grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-lg font-bold text-slate-900">
                      24
                    </p>

                    <p className="text-xs text-slate-500">
                      Topics
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-slate-900">
                      12
                    </p>

                    <p className="text-xs text-slate-500">
                      Quizzes
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-slate-900">
                      82%
                    </p>

                    <p className="text-xs text-slate-500">
                      Avg. Score
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/progress")}
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                >
                  View detailed progress
                  <ArrowRight size={16} />
                </button>
>>>>>>> origin/main
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* ================= QUIZZES + ACTIVITY ================= */}
          <section className="dashboard-grid-two">
            <div className="dashboard-card">
              <div className="card-heading">
                <div>
                  <span className="section-kicker">TEST YOURSELF</span>
                  <h2>Recent Quizzes</h2>
                </div>

                <button onClick={() => navigate("/quizzes")}>
                  View all <ArrowRight size={15} />
                </button>
              </div>

              <div className="quiz-list">
                {quizzes.map((quiz) => (
                  <div className="quiz-row" key={quiz.title}>
                    <div className="quiz-icon">
                      <ClipboardList size={18} />
                    </div>

                    <div className="quiz-information">
                      <strong>{quiz.title}</strong>
                      <span>{quiz.questions} questions</span>
                    </div>

                    <div className="quiz-score">
                      {quiz.score}
                    </div>
=======
          {/* ==================================================
              QUIZZES + ACTIVITY
          ================================================== */}

          <section className="grid gap-6 xl:grid-cols-2">
            {/* Quizzes */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Recent Quizzes
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your latest quiz performance
                  </p>
                </div>

                <button
                  onClick={() => navigate("/quizzes")}
                  className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                >
                  View all
                </button>
              </div>

              <div className="space-y-3">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz.title}
                    className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 p-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="rounded-lg bg-indigo-100 p-2.5 text-indigo-600">
                        <ClipboardList size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {quiz.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {quiz.questions} questions
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-600">
                      {quiz.score}
                    </span>
>>>>>>> origin/main
                  </div>
                ))}
              </div>

              <button
<<<<<<< HEAD
                className="card-bottom-link"
                onClick={() => navigate("/quizzes")}
              >
                Browse all quizzes
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="dashboard-card">
              <div className="card-heading">
                <div>
                  <span className="section-kicker">YOUR JOURNEY</span>
                  <h2>Recent Activity</h2>
                </div>
              </div>

              <div className="activity-list">
                {recentActivity.map((activity) => {
                  const ActivityIcon = activity.icon;

                  return (
                    <div
                      className="activity-row"
                      key={activity.title}
                    >
                      <div className="activity-icon">
                        <ActivityIcon size={17} />
                      </div>

                      <div className="activity-information">
                        <strong>{activity.title}</strong>

                        <span>
                          {activity.type} <b>•</b>{" "}
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="dashboard-footer">
            <span>AI Study Assistant</span>
            <span>Keep learning. Keep growing. 🚀</span>
          </footer>
=======
                onClick={() => navigate("/quizzes")}
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
              >
                Browse all quizzes
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Activity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Study Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your latest learning activity
                </p>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.title}
                    className="flex gap-3"
                  >
                    <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-indigo-500" />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-800">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {activity.type} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
>>>>>>> origin/main
        </div>
      </main>
    </div>
  );
}

export default Dashboard;