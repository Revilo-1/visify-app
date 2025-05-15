// Sprogoversættelser
const translations = {
    en: {
        // Fælles
        settings: 'Settings',
        dashboard: 'Dashboard',
        requestReview: 'Request Review',
        customers: 'Customers',
        myAccount: 'My Account',
        logout: 'Logout',
        save: 'Save',
        cancel: 'Cancel',
        
        // Login
        login: 'Login',
        loginSubtitle: 'Sign in to your account',
        signIn: 'Sign In',
        password: 'Password',
        forgotPassword: 'Forgot your password?',
        invalidCredentials: 'Invalid email or password',
        welcomeBack: 'Welcome back! Here\'s what\'s happening with your reviews.',
        
        // User roles and admin
        admin: 'Administrator',
        user: 'User',
        adminDashboard: 'Admin Dashboard',
        adminWelcome: 'Manage users and system settings',
        userManagement: 'User Management',
        systemSettings: 'System Settings',
        adminTools: 'Admin Tools',
        welcomeAdmin: 'Welcome, Administrator',
        totalUsers: 'Total Users',
        activeUsers: 'Active Users',
        pendingInvites: 'Pending Invites',
        fromLastMonth: 'from last month',
        fromLastWeek: 'from last week',
        inviteUser: 'Invite New User',
        sendInvite: 'Send Invite',
        allUsers: 'All Users',
        active: 'Active',
        pending: 'Pending',
        suspended: 'Suspended',
        name: 'Name',
        email: 'Email',
        role: 'Role',
        status: 'Status',
        lastActive: 'Last Active',
        actions: 'Actions',
        edit: 'Edit',
        suspend: 'Suspend',
        activate: 'Activate',
        delete: 'Delete',
        confirmSuspend: 'Are you sure you want to suspend this user?',
        confirmDelete: 'Are you sure you want to delete this user? This action cannot be undone.',
        userSuspended: 'User suspended successfully',
        userActivated: 'User activated successfully',
        userDeleted: 'User deleted successfully',
        inviteSent: 'Invitation sent successfully',
        userExists: 'A user with this email already exists',
        
        // Dashboard
        reviewActivity: 'Review Activity',
        ratingDistribution: 'Rating Distribution',
        sentimentAnalysis: 'Sentiment Analysis',
        
        // Request Review
        requestReviewDescription: 'Send review requests to your customers and collect valuable feedback',
        selectCustomers: 'Select Customers',
        customerEmails: 'Customer Emails',
        addAnotherEmail: 'Add another email',
        uploadCsv: 'Or upload CSV file',
        uploadCsvDescription: 'Upload a CSV file containing customer emails (one per line)',
        selectReviewPlatform: 'Select Review Platform',
        chooseReviewPlatform: 'Choose where you want to collect reviews',
        google: 'Google',
        tripadvisor: 'TripAdvisor',
        customizeMessage: 'Customize Message',
        emailSubject: 'Email Subject',
        shareExperienceSubject: 'Share your experience with us',
        emailBody: 'Email Body',
        emailBodyPlaceholder: 'Dear [Customer Name],\n\nThank you for your recent purchase! We\'d love to hear about your experience with us.\n\nPlease take a moment to leave us a review by clicking the button below:\n\n[Review Button]\n\nThank you for your time and feedback!\n\nBest regards,\n[Your Name]\n[Your Business Name]',
        previewEmail: 'Preview Email',
        scheduleAndSend: 'Schedule & Send',
        sendNow: 'Send now',
        scheduleForLater: 'Schedule for later',
        sendReviewRequests: 'Send Review Requests',
        
        // Settings
        settingsDescription: 'Manage your account settings and preferences',
        profileInfo: 'Profile Information',
        personalInfo: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        position: 'Position',
        languageRegion: 'Language & Region',
        language: 'Language',
        timezone: 'Time Zone',
        dateFormat: 'Date Format',
        changePassword: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        updatePassword: 'Update Password',
        notifications: 'Notifications',
        notificationPreferences: 'Notification Preferences',
        emailNotifications: 'Email Notifications',
        pushNotifications: 'Push Notifications',
        newsletter: 'Newsletter',
        updateLanguage: 'Update Language',
        languageUpdated: 'Language updated successfully',
        saveChanges: 'Save Changes',
        cancel: 'Cancel',
        
        // Analytics
        analytics: 'Analytics',
        analyticsDescription: 'Gain insights into your review performance and customer feedback',
        totalReviews: 'Total Reviews',
        averageRating: 'Average Rating',
        responseRate: 'Response Rate',
        negativeReviews: 'Negative Reviews',
        fromLastMonth: 'from last month',
        reviewTrends: 'Review Trends',
        week: 'Week',
        month: 'Month',
        year: 'Year',
        sentimentAnalysis: 'Sentiment Analysis',
        recentReviews: 'Recent Reviews',
        platform: 'Platform',
        all: 'All',
        rating: 'Rating',
        date: 'Date',
        allTime: 'All Time',
        today: 'Today',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        fiveStars: '5 Stars',
        fourStars: '4 Stars',
        threeStars: '3 Stars',
        twoStars: '2 Stars',
        oneStar: '1 Star',
        chartPlaceholder: 'Review trends chart will be displayed here',
        sentimentChartPlaceholder: 'Sentiment analysis chart will be displayed here'
    },
    da: {
        // Fælles
        settings: 'Indstillinger',
        dashboard: 'Dashboard',
        requestReview: 'Anmod om anmeldelse',
        customers: 'Kunder',
        myAccount: 'Min konto',
        logout: 'Log ud',
        save: 'Gem',
        cancel: 'Annuller',
        
        // Login
        login: 'Log ind',
        loginSubtitle: 'Log ind på din konto',
        signIn: 'Log ind',
        password: 'Adgangskode',
        forgotPassword: 'Glemt din adgangskode?',
        invalidCredentials: 'Forkert e-mail eller adgangskode',
        welcomeBack: 'Velkommen tilbage! Her er en oversigt over dine anmeldelser.',
        
        // User roles and admin
        admin: 'Administrator',
        user: 'Bruger',
        adminDashboard: 'Admin Panel',
        adminWelcome: 'Administrer brugere og systemindstillinger',
        userManagement: 'Brugeradministration',
        systemSettings: 'Systemindstillinger',
        adminTools: 'Admin-værktøjer',
        welcomeAdmin: 'Velkommen, Administrator',
        totalUsers: 'Samlet antal brugere',
        activeUsers: 'Aktive brugere',
        pendingInvites: 'Ventende invitationer',
        fromLastMonth: 'siden sidste måned',
        fromLastWeek: 'siden sidste uge',
        inviteUser: 'Inviter ny bruger',
        sendInvite: 'Send invitation',
        allUsers: 'Alle brugere',
        active: 'Aktiv',
        pending: 'Afventer',
        suspended: 'Suspenderet',
        name: 'Navn',
        email: 'E-mail',
        role: 'Rolle',
        status: 'Status',
        lastActive: 'Sidst aktiv',
        actions: 'Handlinger',
        edit: 'Rediger',
        suspend: 'Suspender',
        activate: 'Aktiver',
        delete: 'Slet',
        confirmSuspend: 'Er du sikker på, at du vil suspendere denne bruger?',
        confirmDelete: 'Er du sikker på, at du vil slette denne bruger? Handlingen kan ikke fortrydes.',
        userSuspended: 'Bruger suspenderet',
        userActivated: 'Bruger aktiveret',
        userDeleted: 'Bruger slettet',
        inviteSent: 'Invitation sendt',
        userExists: 'Der findes allerede en bruger med denne e-mail',
        
        // Dashboard
        reviewActivity: 'Anmeldelsesaktivitet',
        ratingDistribution: 'Vurderingsfordeling',
        sentimentAnalysis: 'Stemningsanalyse',
        
        // Request Review
        requestReviewDescription: 'Send anmodninger om anmeldelser til dine kunder og indsaml værdifuld feedback',
        selectCustomers: 'Vælg kunder',
        customerEmails: 'Kunders e-mails',
        addAnotherEmail: 'Tilføj endnu en e-mail',
        uploadCsv: 'Eller upload CSV-fil',
        uploadCsvDescription: 'Upload en CSV-fil med kundernes e-mails (én pr. linje)',
        selectReviewPlatform: 'Vælg anmeldelsesplatform',
        chooseReviewPlatform: 'Vælg hvor du ønsker at indsamle anmeldelser',
        google: 'Google',
        tripadvisor: 'TripAdvisor',
        customizeMessage: 'Tilpas besked',
        emailSubject: 'E-mail emne',
        shareExperienceSubject: 'Del din oplevelse med os',
        emailBody: 'E-mail indhold',
        emailBodyPlaceholder: 'Kære [Kundens navn],\n\nTak for dit nylige køb! Vi vil meget gerne høre om din oplevelse med os.\n\nTag dig venligst et øjeblik til at efterlade en anmeldelse ved at klikke på knappen nedenfor:\n\n[Anmeldelsesknap]\n\nTak for din tid og feedback!\n\nMed venlig hilsen,\n[Dit navn]\n[Din virksomhedsnavn]',
        previewEmail: 'Forhåndsvisning af e-mail',
        scheduleAndSend: 'Planlæg og send',
        sendNow: 'Send nu',
        scheduleForLater: 'Planlæg til senere',
        sendReviewRequests: 'Send anmodninger om anmeldelser',
        
        // Settings
        settingsDescription: 'Administrer dine kontoindstillinger og præferencer',
        profileInfo: 'Profiloplysninger',
        personalInfo: 'Personlige oplysninger',
        firstName: 'Fornavn',
        lastName: 'Efternavn',
        email: 'E-mail',
        phone: 'Telefon',
        company: 'Virksomhed',
        position: 'Stilling',
        languageRegion: 'Sprog og region',
        language: 'Sprog',
        timezone: 'Tidszone',
        dateFormat: 'Datoformat',
        changePassword: 'Skift adgangskode',
        currentPassword: 'Nuværende adgangskode',
        newPassword: 'Ny adgangskode',
        confirmPassword: 'Bekræft adgangskode',
        updatePassword: 'Opdater adgangskode',
        notifications: 'Notifikationer',
        notificationPreferences: 'Notifikationsindstillinger',
        emailNotifications: 'E-mail notifikationer',
        pushNotifications: 'Push notifikationer',
        newsletter: 'Nyhedsbrev',
        updateLanguage: 'Opdater sprog',
        languageUpdated: 'Sprog opdateret',
        saveChanges: 'Gem ændringer',
        cancel: 'Annuller',
        
        // Analytics
        analytics: 'Analyser',
        analyticsDescription: 'Få indsigt i dine anmeldelsers præstation og kundefeedback',
        totalReviews: 'Samlet antal anmeldelser',
        averageRating: 'Gennemsnitlig vurdering',
        responseRate: 'Svarprocent',
        negativeReviews: 'Negative anmeldelser',
        fromLastMonth: 'siden sidste måned',
        reviewTrends: 'Anmeldelsestendenser',
        week: 'Uge',
        month: 'Måned',
        year: 'År',
        sentimentAnalysis: 'Stemningsanalyse',
        recentReviews: 'Seneste anmeldelser',
        platform: 'Platform',
        all: 'Alle',
        rating: 'Vurdering',
        date: 'Dato',
        allTime: 'Hele tiden',
        today: 'I dag',
        thisWeek: 'Denne uge',
        thisMonth: 'Denne måned',
        fiveStars: '5 stjerner',
        fourStars: '4 stjerner',
        threeStars: '3 stjerner',
        twoStars: '2 stjerner',
        oneStar: '1 stjerne',
        chartPlaceholder: 'Graf over anmeldelsestendenser vises her',
        sentimentChartPlaceholder: 'Graf for stemningsanalyse vises her'
    }
};

// Funktion til at indlæse sprogindstilling
function loadLanguage() {
    return localStorage.getItem('userLanguage') || 'en';
}

// Funktion til at gemme sprogindstilling
function saveLanguage(lang) {
    localStorage.setItem('userLanguage', lang);
    document.documentElement.lang = lang;
}

// Funktion til at opdatere UI med oversættelser
function updateUITranslations(lang) {
    const t = translations[lang] || translations['en'];
    
    // Opdater alle elementer med data-i18n attribut
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Opdater placeholder tekster
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Opdater title attributter
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (t[key]) {
            el.title = t[key];
        }
    });
}

// Initialisering af sprog
function initLanguage() {
    const lang = loadLanguage();
    saveLanguage(lang);
    updateUITranslations(lang);
    return lang;
}

// Skift sprog
function changeLanguage(lang) {
    if (translations[lang]) {
        saveLanguage(lang);
        updateUITranslations(lang);
        return true;
    }
    return false;
}
