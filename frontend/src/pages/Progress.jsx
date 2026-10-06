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
  Clock,
  Trophy,
  Target,
  CheckCircle,
  TrendingUp,
  Award,
  Flame,
} from "lucide-react";
<<<<<<< HEAD
=======

>>>>>>> origin/main
import { useAuth } from "../context/AuthContext";

function Progress() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const studentName =
    user?.name ||
    user?.username ||
    user?.email?.split("@")[0] ||
    "Student";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

<<<<<<< HEAD
=======
  // Frontend dummy data
>>>>>>> origin/main
  const subjects = [
    {
      name: "Computer Organization & Assembly Language",
      shortName: "COAL",
      progress: 78,
      completed: 12,
      total: 15,
    },
    {
      name: "Information & Communication Technology",
      shortName: "ICT",
      progress: 65,
      completed: 10,
      total: 15,
    },
    {
      name: "Programming Fundamentals",
      shortName: "PF",
      progress: 52,
      completed: 8,
      total: 15,
    },
  ];

  const weeklyActivity = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.5 },
    { day: "Wed", hours: 1.5 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 3 },
    { day: "Sat", hours: 5 },
    { day: "Sun", hours: 2 },
  ];

  const achievements = [
    {
      title: "First Quiz",
      description: "Completed your first quiz",
      icon: Trophy,
    },
    {
      title: "10 Quiz Milestone",
      description: "Completed 10 quizzes",
      icon: Award,
    },
    {
      title: "Consistent Learner",
      description: "Studied for 7 days",
      icon: Flame,
    },
    {
      title: "COAL Mastery",
      description: "Reached 75% progress in COAL",
      icon: Target,
    },
  ];

  const quizPerformance = [
    {
<<<<<<< HEAD
      name: "COAL Fundamentals Quiz",
=======
      title: "COAL Fundamentals Quiz",
>>>>>>> origin/main
      subject: "COAL",
      score: 78,
      questions: 15,
    },
    {
<<<<<<< HEAD
      name: "ICT Basics Quiz",
=======
      title: "ICT Basics Quiz",
>>>>>>> origin/main
      subject: "ICT",
      score: 85,
      questions: 10,
    },
    {
<<<<<<< HEAD
      name: "Programming Fundamentals",
=======
      title: "Programming Fundamentals",
>>>>>>> origin/main
      subject: "PF",
      score: 65,
      questions: 20,
    },
    {
<<<<<<< HEAD
      name: "Computer Architecture",
=======
      title: "Computer Architecture",
>>>>>>> origin/main
      subject: "COAL",
      score: 76,
      questions: 15,
    },
  ];

<<<<<<< HEAD
  const maxHours = Math.max(
    ...weeklyActivity.map((item) => item.hours)
  );

  return (
    <div className="progress-page">
      {/* Sidebar */}
      <aside className="progress-sidebar">
        <div className="progress-sidebar-inner">

          {/* Brand */}
          <div className="progress-sidebar-brand">
            <div className="progress-brand-icon">
              <BookOpen size={21} />
            </div>

            <div>
              <h1 className="progress-brand-title">
                StudyAI
              </h1>

              <p className="progress-brand-subtitle">
                Study smarter
              </p>
=======
  const maxHours = Math.max(...weeklyActivity.map((item) => item.hours));

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ===================================================== */}
      {/* SIDEBAR */}
      {/* ===================================================== */}

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
          <nav className="progress-nav">

            <button
              onClick={() => navigate("/dashboard")}
              className="progress-nav-item"
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
              className="progress-nav-item"
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
              className="progress-nav-item"
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
              className="progress-nav-item"
=======
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <ClipboardList size={20} />
              <span>Quizzes</span>
            </button>

<<<<<<< HEAD
            <button
              onClick={() => navigate("/progress")}
              className="progress-nav-item progress-nav-item-active"
=======
            {/* Active Progress */}
            <button
              onClick={() => navigate("/progress")}
              className="flex w-full items-center gap-3 rounded-xl bg-indigo-50 px-4 py-3 font-medium text-indigo-600"
>>>>>>> origin/main
            >
              <BarChart3 size={20} />
              <span>Progress</span>
            </button>

            <button
              onClick={() => navigate("/profile")}
<<<<<<< HEAD
              className="progress-nav-item"
=======
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-indigo-600"
>>>>>>> origin/main
            >
              <User size={20} />
              <span>Profile</span>
            </button>

          </nav>

          {/* Logout */}
<<<<<<< HEAD
          <div className="progress-logout-wrap">
            <button
              onClick={handleLogout}
              className="progress-logout"
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
<<<<<<< HEAD
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="progress-main">

        {/* Content */}
        <div className="progress-content">

          {/* Welcome */}
          <div className="progress-welcome">
            <div>
              <p className="progress-welcome-kicker">
                KEEP GOING
              </p>

              <h1 className="progress-welcome-title">
                {studentName}'s Learning Progress
              </h1>

              <p className="progress-welcome-text">
                Here's a snapshot of your study activity and
                achievements.
              </p>
            </div>

            <div className="progress-welcome-badge">
              <TrendingUp size={17} />
              <span>You're improving</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="progress-summary-grid">

            <div className="progress-summary-card">
              <div className="progress-summary-top">
                <div className="progress-summary-icon progress-icon-indigo">
                  <TrendingUp size={21} />
                </div>

                <span className="progress-summary-trend">
                  +8%
                </span>
              </div>

              <p className="progress-summary-label">
                Overall Progress
              </p>

              <h3 className="progress-summary-value">
                68%
              </h3>
            </div>

            <div className="progress-summary-card">
              <div className="progress-summary-top">
                <div className="progress-summary-icon progress-icon-blue">
                  <Clock size={21} />
                </div>

                <span className="progress-summary-trend">
                  +4.5h
                </span>
              </div>

              <p className="progress-summary-label">
                Study Hours
              </p>

              <h3 className="progress-summary-value">
                28.5
              </h3>
            </div>

            <div className="progress-summary-card">
              <div className="progress-summary-top">
                <div className="progress-summary-icon progress-icon-purple">
                  <ClipboardList size={21} />
                </div>

                <span className="progress-summary-trend">
                  Active
                </span>
              </div>

              <p className="progress-summary-label">
                Quizzes Completed
              </p>

              <h3 className="progress-summary-value">
                12
              </h3>
            </div>

            <div className="progress-summary-card">
              <div className="progress-summary-top">
                <div className="progress-summary-icon progress-icon-green">
                  <Target size={21} />
                </div>

                <span className="progress-summary-trend">
                  Good
                </span>
              </div>

              <p className="progress-summary-label">
                Average Quiz Score
              </p>

              <h3 className="progress-summary-value">
                76%
              </h3>
=======

          </div>
        </div>
      </aside>


      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <main className="lg:ml-64">

        {/* Header */}
        <header className="border-b border-gray-200 bg-white">

          <div className="flex h-20 items-center px-4 sm:px-6 lg:px-8">

            <button
              onClick={() => navigate("/dashboard")}
              className="mr-4 rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
            >
              <ArrowLeft size={21} />
            </button>

            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Progress
              </h2>

              <p className="text-sm text-gray-500">
                Track your learning journey and performance
              </p>
            </div>

          </div>

        </header>


        {/* Page Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          {/* Welcome */}
          <div className="mb-8">

            <h1 className="text-2xl font-bold text-gray-900">
              {studentName}'s Learning Progress
            </h1>

            <p className="mt-1 text-gray-500">
              Keep going! You are making steady progress.
            </p>

          </div>


          {/* ================================================= */}
          {/* SUMMARY CARDS */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Overall Progress */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <TrendingUp size={22} />
                </div>

                <span className="text-sm font-medium text-green-600">
                  +8%
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-500">
                Overall Progress
              </p>

              <p className="mt-1 text-3xl font-bold text-gray-900">
                68%
              </p>

            </div>


            {/* Study Hours */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock size={22} />
                </div>

                <span className="text-sm font-medium text-green-600">
                  +4.5h
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-500">
                Study Hours
              </p>

              <p className="mt-1 text-3xl font-bold text-gray-900">
                28.5
              </p>

            </div>


            {/* Quizzes */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <ClipboardList size={22} />
                </div>

                <span className="text-sm font-medium text-gray-500">
                  Completed
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-500">
                Quizzes Completed
              </p>

              <p className="mt-1 text-3xl font-bold text-gray-900">
                12
              </p>

            </div>


            {/* Average Score */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Target size={22} />
                </div>

                <span className="text-sm font-medium text-green-600">
                  Good
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-500">
                Average Quiz Score
              </p>

              <p className="mt-1 text-3xl font-bold text-gray-900">
                76%
              </p>

>>>>>>> origin/main
            </div>

          </div>

<<<<<<< HEAD
          {/* Overall Progress + Weekly Activity */}
          <div className="progress-grid-two">

            {/* Overall Progress */}
            <section className="progress-card">
              <div className="progress-card-header">
                <div>
                  <h2 className="progress-card-title">
                    Overall Progress
                  </h2>

                  <p className="progress-card-subtitle">
                    Your overall course completion
                  </p>
                </div>
              </div>

              <div className="progress-overall-body">

                <div className="progress-ring">
                  <div className="progress-ring-inner">
                    <strong>68%</strong>
                    <span>Complete</span>
                  </div>
                </div>

                <div className="progress-course">

                  <div className="progress-course-row">
                    <span>Course completion</span>
                    <strong>68%</strong>
                  </div>

                  <div className="progress-course-track">
                    <div
                      className="progress-course-fill"
                      style={{ width: "68%" }}
                    />
                  </div>

                  <div className="progress-mini-grid">

                    <div className="progress-mini-stat">
                      <strong className="progress-mini-value">
                        30
                      </strong>

                      <span className="progress-mini-label">
                        Completed Topics
                      </span>
                    </div>

                    <div className="progress-mini-stat">
                      <strong className="progress-mini-value">
                        15
                      </strong>

                      <span className="progress-mini-label">
                        Remaining
                      </span>
                    </div>

                    <div className="progress-mini-stat">
                      <strong className="progress-mini-value">
                        3
                      </strong>

                      <span className="progress-mini-label">
                        Subjects
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            {/* Weekly Activity */}
            <section className="progress-card">

              <div className="progress-card-header">
                <div>
                  <h2 className="progress-card-title">
                    Weekly Activity
                  </h2>

                  <p className="progress-card-subtitle">
=======

          {/* ================================================= */}
          {/* OVERALL PROGRESS + WEEKLY ACTIVITY */}
          {/* ================================================= */}

          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

            {/* Overall Progress */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Overall Progress
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Your overall learning completion
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-indigo-100 text-lg font-bold text-indigo-600">
                  68%
                </div>

              </div>

              <div className="mt-6">

                <div className="mb-2 flex justify-between text-sm">

                  <span className="text-gray-500">
                    Course completion
                  </span>

                  <span className="font-semibold text-gray-900">
                    68%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">

                  <div
                    className="h-full rounded-full bg-indigo-600"
                    style={{ width: "68%" }}
                  />

                </div>

              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">

                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-xl font-bold text-gray-900">
                    30
                  </p>

                  <p className="text-xs text-gray-500">
                    Completed Topics
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-xl font-bold text-gray-900">
                    15
                  </p>

                  <p className="text-xs text-gray-500">
                    Remaining Topics
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-xl font-bold text-gray-900">
                    3
                  </p>

                  <p className="text-xs text-gray-500">
                    Subjects
                  </p>
                </div>

              </div>

            </div>


            {/* Weekly Activity */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Weekly Study Activity
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
>>>>>>> origin/main
                    Hours studied this week
                  </p>
                </div>

<<<<<<< HEAD
                <div className="progress-activity-total">
                  21.5h
                </div>
              </div>

              <div className="progress-chart">

                {weeklyActivity.map((item) => (
                  <div
                    className="progress-bar-column"
                    key={item.day}
                  >
                    <span className="progress-bar-value">
                      {item.hours}h
                    </span>

                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{
                          height: `${(item.hours / maxHours) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="progress-day">
                      {item.day}
                    </span>
                  </div>
                ))}

              </div>
            </section>

          </div>

          {/* Subject Progress */}
          <section className="progress-section-card">

            <div className="progress-section-header">
              <div>
                <h2 className="progress-section-title">
                  Subject Progress
                </h2>

                <p className="progress-section-subtitle">
                  See how you're progressing in each subject
=======
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <BarChart3 size={20} />
                </div>

              </div>

              <div className="mt-6 flex h-48 items-end justify-between gap-2">

                {weeklyActivity.map((item) => {

                  const height =
                    (item.hours / maxHours) * 100;

                  return (
                    <div
                      key={item.day}
                      className="flex h-full flex-1 flex-col items-center justify-end"
                    >

                      <span className="mb-2 text-xs font-medium text-gray-500">
                        {item.hours}h
                      </span>

                      <div className="flex h-32 w-full items-end justify-center">

                        <div
                          className="w-full max-w-8 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-600"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                      </div>

                      <span className="mt-2 text-xs text-gray-500">
                        {item.day}
                      </span>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* SUBJECT PROGRESS */}
          {/* ================================================= */}

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Subject Progress
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Progress across your enrolled subjects
>>>>>>> origin/main
                </p>
              </div>

              <button
                onClick={() => navigate("/subjects")}
<<<<<<< HEAD
                className="progress-section-link"
              >
                View Subjects
                <ArrowLeft size={16} />
              </button>
            </div>

            <div className="progress-subject-list">

              {subjects.map((subject) => (
                <div
                  className="progress-subject-row"
                  key={subject.shortName}
                >

                  <div className="progress-subject-info">

                    <div className="progress-subject-icon">
                      <BookOpen size={18} />
                    </div>

                    <div>
                      <h3 className="progress-subject-name">
                        {subject.shortName}
                      </h3>

                      <p className="progress-subject-full">
=======
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View Subjects →
              </button>

            </div>


            <div className="mt-6 space-y-6">

              {subjects.map((subject) => (

                <div key={subject.shortName}>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="font-semibold text-gray-900">
                        {subject.shortName}
                      </p>

                      <p className="text-sm text-gray-500">
>>>>>>> origin/main
                        {subject.name}
                      </p>
                    </div>

<<<<<<< HEAD
                  </div>

                  <div className="progress-subject-progress">

                    <div className="progress-subject-meta">
                      <span>
                        {subject.completed}/{subject.total} topics
                      </span>

                      <strong>
                        {subject.progress}%
                      </strong>
                    </div>

                    <div className="progress-subject-track">
                      <div
                        className="progress-subject-fill"
=======
                    <div className="text-sm text-gray-500">
                      {subject.completed}/{subject.total} topics
                    </div>

                  </div>


                  <div className="mt-3 flex items-center gap-3">

                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-100">

                      <div
                        className="h-full rounded-full bg-indigo-600"
>>>>>>> origin/main
                        style={{
                          width: `${subject.progress}%`,
                        }}
                      />
<<<<<<< HEAD
                    </div>

                  </div>

                  <div className="progress-subject-score">
                    {subject.progress}%
                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* Quiz Performance */}
          <section className="progress-section-card">

            <div className="progress-section-header">
              <div>
                <h2 className="progress-section-title">
                  Quiz Performance
                </h2>

                <p className="progress-section-subtitle">
                  Your recent quiz scores
=======

                    </div>

                    <span className="w-12 text-right text-sm font-bold text-gray-900">
                      {subject.progress}%
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================================================= */}
          {/* QUIZ PERFORMANCE */}
          {/* ================================================= */}

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Quiz Performance
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your recent quiz results
>>>>>>> origin/main
                </p>
              </div>

              <button
                onClick={() => navigate("/quizzes")}
<<<<<<< HEAD
                className="progress-section-link"
              >
                All Quizzes
                <ArrowLeft size={16} />
              </button>
            </div>

            <div className="progress-quiz-list">

              {quizPerformance.map((quiz) => (
                <div
                  className="progress-quiz-item"
                  key={quiz.name}
                >

                  <div className="progress-quiz-icon">
                    <CheckCircle size={19} />
                  </div>

                  <div className="progress-quiz-info">
                    <h3 className="progress-quiz-title">
                      {quiz.name}
                    </h3>

                    <p className="progress-quiz-meta">
                      {quiz.subject} • {quiz.questions} questions
                    </p>
                  </div>

                  <div className="progress-quiz-score-wrap">

                    <div className="progress-quiz-score-bar">
                      <div
=======
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                All Quizzes →
              </button>

            </div>


            <div className="mt-6 space-y-4">

              {quizPerformance.map((quiz) => (

                <div
                  key={quiz.title}
                  className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <ClipboardList size={20} />
                  </div>


                  <div className="min-w-0 flex-1">

                    <h4 className="truncate font-semibold text-gray-900">
                      {quiz.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {quiz.subject} • {quiz.questions} questions
                    </p>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">

                      <div
                        className="h-full rounded-full bg-indigo-600"
>>>>>>> origin/main
                        style={{
                          width: `${quiz.score}%`,
                        }}
                      />
<<<<<<< HEAD
                    </div>

                    <strong className="progress-quiz-score">
                      {quiz.score}%
                    </strong>
=======

                    </div>

                    <span className="w-12 text-right font-bold text-gray-900">
                      {quiz.score}%
                    </span>
>>>>>>> origin/main

                  </div>

                </div>
<<<<<<< HEAD
              ))}

            </div>
          </section>

          {/* Achievements */}
          <section className="progress-section-card">

            <div className="progress-section-header">
              <div>
                <h2 className="progress-section-title">
                  Achievements
                </h2>

                <p className="progress-section-subtitle">
                  Milestones you've reached
                </p>
              </div>
            </div>

            <div className="progress-achievement-grid">

              {achievements.map((achievement) => {
=======

              ))}

            </div>

          </div>


          {/* ================================================= */}
          {/* ACHIEVEMENTS */}
          {/* ================================================= */}

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Achievements
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Milestones you have achieved during your learning journey
              </p>
            </div>


            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {achievements.map((achievement) => {

>>>>>>> origin/main
                const Icon = achievement.icon;

                return (
                  <div
<<<<<<< HEAD
                    className="progress-achievement-card"
                    key={achievement.title}
                  >

                    <div className="progress-achievement-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="progress-achievement-title">
                        {achievement.title}
                      </h3>

                      <p className="progress-achievement-text">
                        {achievement.description}
                      </p>
                    </div>
=======
                    key={achievement.title}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                      <Icon size={23} />
                    </div>

                    <h4 className="mt-4 font-bold text-gray-900">
                      {achievement.title}
                    </h4>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {achievement.description}
                    </p>
>>>>>>> origin/main

                  </div>
                );
              })}

            </div>
<<<<<<< HEAD
          </section>

          {/* AI Assistant CTA */}
          <section className="progress-ai-cta">

            <div className="progress-ai-decoration" />

            <div className="progress-ai-content">

              <div className="progress-ai-icon">
                <Bot size={24} />
              </div>

              <div>
                <h2 className="progress-ai-title">
                  Need help improving your progress?
                </h2>

                <p className="progress-ai-text">
                  Ask your AI Study Assistant for personalized
                  explanations, study tips, and exam preparation.
                </p>
=======

          </div>


          {/* ================================================= */}
          {/* AI ASSISTANT CTA */}
          {/* ================================================= */}

          <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-sm">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="flex items-center gap-2">
                  <Bot size={22} />

                  <h3 className="text-lg font-bold">
                    Need help improving your progress?
                  </h3>
                </div>

                <p className="mt-2 max-w-2xl text-sm text-indigo-100">
                  Ask the AI Study Assistant for personalized explanations,
                  study plans, quiz preparation, and learning guidance.
                </p>

>>>>>>> origin/main
              </div>

              <button
                onClick={() => navigate("/ai-assistant")}
<<<<<<< HEAD
                className="progress-ai-button"
              >
                Open AI Assistant
                <ArrowLeft size={17} />
              </button>

            </div>
          </section>

        </div>
      </main>
=======
                className="shrink-0 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Open AI Assistant
              </button>

            </div>

          </div>


          {/* Bottom spacing */}
          <div className="h-8" />

        </div>
      </main>

>>>>>>> origin/main
    </div>
  );
}

export default Progress;