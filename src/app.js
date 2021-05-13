var app = new Vue(
    {
        el: '#root',
        data: {
            /*NAV*/ 
            navLinks: ["Courses", "Zoom", "Pages", "Bundles", "Course formats", "Add Course", "Demos"],
            
            navSocials: ['<i class="fab fa-twitter"></i>', 
                        '<i class="fab fa-instagram"></i>', 
                        '<i class="fab fa-behance"></i>', 
                        '<i class="fas fa-volleyball-ball"></i>',
                        '<i class="fab fa-google-plus-square"></i>',
                        '<i class="fab fa-git"></i>',
                        '<i class="fab fa-linkedin-in"></i>',
                        '<i class="fab fa-pinterest"></i>'
                        ],
            
            
            /*FOOTER*/ 
            footerSocials: [ '<i class="fab fa-facebook"></i>', '<i class="fab fa-twitter"></i>', '<i class="fab fa-instagram"></i>'],
            
            footerLinksOne: ["Blog", "Home", "Shortcodes"],

            footerLinksTwo: ["Courses", "Membership A...", "Typography"],

            
            blog: [
                {
                    img: 'img/photo-1517520287167-4bbf64a00d66-50x50.jpeg',
                    title: 'Our main target is "to developing yourself as a leader',
                    date: '- August 9, 2018'
                },
                
                {
                    img: 'img/photo-1490376840453-5f616fbebe5b-50x50.jpeg',
                    title: "Those other college experiences you aren't thinking about",
                    date: '- June 3, 2015'
                }
                
            ]
            
            
        },

        methods: {

        },

    }
);