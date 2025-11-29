// Array of over 175 books including fiction and educational textbooks
const books = [
    // FICTION & CLASSICS (keeping your original fiction books intact)
    { id: 84, title: 'Frankenstein; Or, The Modern Prometheus', author: 'Mary Wollstonecraft Shelley', genre: 'sci-fi', description: 'A scientist creates a living being from assembled body parts and faces the consequences of his actions as the creature seeks revenge and companionship.' },
    { id: 2701, title: 'Moby Dick; Or, The Whale', author: 'Herman Melville', genre: 'classics', description: 'A whaling captain becomes obsessed with hunting a giant white whale, leading to a tale of adventure, madness, and maritime life.' },
    
    // ... (keep all your existing fiction books as they are)

    // FIXED MATH BOOKS - Updated with working URLs
    { 
        id: 'algebra-1',
        title: 'Algebra 1 Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Complete Algebra 1 course with exercises and examples for high school students.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-algebra-i-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Algebra+1'
    },
    { 
        id: 'algebra-2',
        title: 'Algebra 2 Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Advanced algebra concepts including matrices, complex numbers, and advanced functions.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-algebra-ii-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Algebra+2'
    },
    { 
        id: 'geometry',
        title: 'Geometry Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Complete geometry course covering proofs, theorems, and spatial mathematics.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-geometry-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Geometry'
    },
    { 
        id: 'pre-calculus',
        title: 'Pre-Calculus Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Preparation for calculus covering advanced algebra, trigonometry, and analytical geometry.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-precalculus-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Pre-Calculus'
    },
    { 
        id: 'calculus',
        title: 'Calculus Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Introduction to differential and integral calculus with practical applications.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-calculus-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Calculus'
    },
    { 
        id: 'statistics',
        title: 'Statistics Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'math', 
        description: 'Probability and statistics for high school students with real-world applications.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-probability-and-statistics-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Statistics'
    },
    { 
        id: 'openstax-algebra',
        title: 'College Algebra', 
        author: 'OpenStax', 
        genre: 'math', 
        description: 'Comprehensive college algebra textbook with exercises and examples.',
        downloadUrl: 'https://openstax.org/details/books/college-algebra',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=College+Algebra'
    },
    { 
        id: 'openstax-calculus',
        title: 'Calculus Volume 1', 
        author: 'OpenStax', 
        genre: 'math', 
        description: 'First volume of calculus covering limits, derivatives, and applications.',
        downloadUrl: 'https://openstax.org/details/books/calculus-volume-1',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Calculus+Vol+1'
    },

    // FIXED PHYSICS BOOKS
    { 
        id: 'physics-openstax',
        title: 'University Physics Volume 1', 
        author: 'OpenStax', 
        genre: 'physics', 
        description: 'Comprehensive university-level physics covering mechanics, waves, and thermodynamics.',
        downloadUrl: 'https://openstax.org/details/books/university-physics-volume-1',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=University+Physics'
    },
    { 
        id: 'high-school-physics',
        title: 'High School Physics', 
        author: 'CK-12 Foundation', 
        genre: 'physics', 
        description: 'Complete high school physics curriculum with experiments and problem sets.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-physics-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/2196F3/ffffff?text=High+School+Physics'
    },

    // FIXED CHEMISTRY BOOKS
    { 
        id: 'chemistry-2e',
        title: 'Chemistry 2e', 
        author: 'OpenStax', 
        genre: 'chemistry', 
        description: 'Comprehensive chemistry textbook covering atoms, molecules, reactions, and organic chemistry.',
        downloadUrl: 'https://openstax.org/details/books/chemistry-2e',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Chemistry+2e'
    },
    { 
        id: 'chemistry-bested',
        title: 'Chemistry Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'chemistry', 
        description: 'High school chemistry with labs, periodic table, and chemical reactions.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-chemistry-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/FF9800/ffffff?text=Chemistry'
    },

    // FIXED BIOLOGY BOOKS
    { 
        id: 'biology-2e',
        title: 'Biology 2e', 
        author: 'OpenStax', 
        genre: 'biology', 
        description: 'Comprehensive biology textbook covering cells, genetics, evolution, and ecology.',
        downloadUrl: 'https://openstax.org/details/books/biology-2e',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Biology+2e'
    },
    { 
        id: 'biology-bested',
        title: 'Biology Textbook', 
        author: 'CK-12 Foundation', 
        genre: 'biology', 
        description: 'High school biology covering cells, DNA, evolution, and human anatomy.',
        downloadUrl: 'https://www.ck12.org/book/ck-12-biology-concepts/',
        coverUrl: 'https://via.placeholder.com/250x350/4CAF50/ffffff?text=Biology'
    },

    // FIXED HISTORY BOOKS
    { 
        id: 'world-history',
        title: 'World History', 
        author: 'OpenStax', 
        genre: 'history', 
        description: 'Comprehensive world history from ancient civilizations to modern times.',
        downloadUrl: 'https://openstax.org/details/books/world-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=World+History'
    },
    { 
        id: 'us-history',
        title: 'US History', 
        author: 'OpenStax', 
        genre: 'history', 
        description: 'Complete United States history from colonization to present day.',
        downloadUrl: 'https://openstax.org/details/books/us-history',
        coverUrl: 'https://via.placeholder.com/250x350/795548/ffffff?text=US+History'
    }
    // ... Add more subjects as needed following the same pattern
];

// IMPROVED: Better URL handling function
function getBookDownloadUrl(book) {
    if (book.downloadUrl) {
        return book.downloadUrl;
    }
    if (book.id && typeof book.id === 'number') {
        return `https://www.gutenberg.org/ebooks/${book.id}`;
    }
    return '#';
}

// IMPROVED: Better cover image handling
function getBookCoverUrl(book, genre) {
    if (book.coverUrl) {
        return book.coverUrl;
    }
    if (book.id && typeof book.id === 'number') {
        return `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`;
    }
    
    // Subject-based placeholder colors
    const colors = {
        'math': '4CAF50',
        'physics': '2196F3', 
        'chemistry': 'FF9800',
        'biology': '4CAF50',
        'history': '795548',
        'fiction': '007bff',
        'non-fiction': '6c757d',
        'mystery': '343a40',
        'sci-fi': '17a2b8',
        'fantasy': '6f42c1',
        'classics': 'e83e8c',
        'philosophy': 'fd7e14'
    };
    const color = colors[genre] || '007bff';
    const title = encodeURIComponent(book.title.substring(0, 20));
    return `https://via.placeholder.com/250x350/${color}/ffffff?text=${title}`;
}

// DOM Content Loaded event to ensure proper rendering
document.addEventListener('DOMContentLoaded', function() {
    // Render book sections
    const main = document.getElementById('book-sections');
    
    genres.forEach(genre => {
        if (groupedBooks[genre].length > 0) {
            const section = document.createElement('section');
            section.id = genre;
            section.className = 'section';
            section.innerHTML = `<h2>${genre.charAt(0).toUpperCase() + genre.slice(1).replace('-', ' ')}</h2><div class="book-grid"></div>`;
            const grid = section.querySelector('.book-grid');
            
            groupedBooks[genre].forEach(book => {
                const card = document.createElement('div');
                card.className = 'book-card';
                card.setAttribute('data-title', book.title.toLowerCase());
                card.setAttribute('data-author', book.author.toLowerCase());
                card.setAttribute('data-description', book.description.toLowerCase());
                
                const coverSrc = getBookCoverUrl(book, genre);
                const downloadUrl = getBookDownloadUrl(book);
                
                card.innerHTML = `
                    <img src="${coverSrc}" 
                         alt="${book.title} Cover" 
                         onerror="this.src='https://via.placeholder.com/250x350/6c757d/ffffff?text=Cover+Not+Available'">
                    <h3>${book.title}</h3>
                    <p class="author">By ${book.author}</p>
                    <p class="description">${book.description}</p>
                    <a href="${downloadUrl}" target="_blank" rel="noopener" class="download-btn">Download / Read Online</a>
                `;
                grid.appendChild(card);
            });
            main.appendChild(section);
        }
    });

    // IMPROVED: Better search functionality with debouncing
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.book-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
            const title = card.getAttribute('data-title');
            const author = card.getAttribute('data-author');
            const description = card.getAttribute('data-description');
            
            if (query.length === 0 || title.includes(query) || author.includes(query) || description.includes(query)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show message if no results
        const existingMessage = document.getElementById('no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        if (visibleCount === 0 && query.length > 0) {
            const message = document.createElement('div');
            message.id = 'no-results-message';
            message.style.textAlign = 'center';
            message.style.padding = '2em';
            message.style.gridColumn = '1 / -1';
            message.innerHTML = `<p>No books found for "${query}". Try different keywords.</p>`;
            main.appendChild(message);
        }
    }
    
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// IMPROVED: Add book function with validation
function addBook(bookData) {
    // Validate book data
    const requiredFields = ['id', 'title', 'author', 'genre', 'description'];
    const missingFields = requiredFields.filter(field => !bookData[field]);
    
    if (missingFields.length > 0) {
        console.error('Invalid book data: Missing required fields', missingFields);
        return false;
    }
    
    // Add to books array
    books.push(bookData);
    
    // Update the specific genre section
    const genreSection = document.getElementById(bookData.genre);
    if (genreSection) {
        const grid = genreSection.querySelector('.book-grid');
        const card = document.createElement('div');
        card.className = 'book-card';
        card.setAttribute('data-title', bookData.title.toLowerCase());
        card.setAttribute('data-author', bookData.author.toLowerCase());
        card.setAttribute('data-description', bookData.description.toLowerCase());
        
        const coverSrc = getBookCoverUrl(bookData, bookData.genre);
        const downloadUrl = getBookDownloadUrl(bookData);
        
        card.innerHTML = `
            <img src="${coverSrc}" 
                 alt="${bookData.title} Cover" 
                 onerror="this.src='https://via.placeholder.com/250x350/6c757d/ffffff?text=Cover+Not+Available'">
            <h3>${bookData.title}</h3>
            <p class="author">By ${bookData.author}</p>
            <p class="description">${bookData.description}</p>
            <a href="${downloadUrl}" target="_blank" rel="noopener" class="download-btn">Download / Read Online</a>
        `;
        grid.appendChild(card);
    }
    
    return true;
}

// Group books by genre - updated to include all subjects
const genres = ['fiction', 'non-fiction', 'mystery', 'sci-fi', 'fantasy', 'classics', 'history', 'philosophy', 'math', 'physics', 'chemistry', 'biology'];
const groupedBooks = genres.reduce((acc, genre) => {
    acc[genre] = books.filter(book => book.genre === genre);
    return acc;
}, {});
