 const recipesContainer = document.querySelector("#recipes");
const searchBox = document.querySelector("#searchBox");
const categoryButtons = document.querySelectorAll(".categories button");

let selectedCategory = "all";

const recipes = [

    // =========================
    // BREAKFAST — 10
    // =========================

    {
        name: "🥞 Fluffy Pancakes",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
        description: "Soft, fluffy pancakes that are perfect for a relaxing breakfast.",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1 1/2 cups milk",
            "2 eggs",
            "2 tablespoons melted butter",
            "Pinch of salt"
        ],
        instructions: [
            "Mix the flour, sugar, baking powder and salt in a bowl.",
            "Add the milk, eggs and melted butter.",
            "Whisk until you have a smooth batter.",
            "Heat a lightly greased pan over medium heat.",
            "Pour some batter into the pan and cook until bubbles appear.",
            "Flip and cook the other side until golden.",
            "Serve warm with your favorite topping."
        ]
    },

    {
        name: "🍳 Scrambled Eggs",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
        description: "Creamy scrambled eggs that are quick and easy to prepare.",
        ingredients: [
            "3 eggs",
            "2 tablespoons milk",
            "1 tablespoon butter",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Crack the eggs into a bowl.",
            "Add milk, salt and pepper.",
            "Whisk until well combined.",
            "Melt butter in a pan over medium heat.",
            "Pour in the eggs.",
            "Stir gently until the eggs are cooked.",
            "Serve immediately."
        ]
    },

    {
        name: "🍞 French Toast",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800",
        description: "Golden slices of bread coated in a sweet egg mixture.",
        ingredients: [
            "4 slices bread",
            "2 eggs",
            "1/2 cup milk",
            "1 tablespoon sugar",
            "1/2 teaspoon cinnamon",
            "Butter"
        ],
        instructions: [
            "Whisk the eggs, milk, sugar and cinnamon.",
            "Dip each slice of bread into the mixture.",
            "Heat butter in a pan.",
            "Place the bread in the pan.",
            "Cook both sides until golden brown.",
            "Serve with fruit or another topping you enjoy."
        ]
    },

    {
        name: "🧇 Homemade Waffles",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800",
        description: "Crispy on the outside and soft inside homemade waffles.",
        ingredients: [
            "2 cups flour",
            "2 eggs",
            "1 3/4 cups milk",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "4 tablespoons melted butter",
            "Pinch of salt"
        ],
        instructions: [
            "Mix flour, sugar, baking powder and salt.",
            "Whisk eggs, milk and melted butter separately.",
            "Combine the wet and dry ingredients.",
            "Preheat your waffle maker.",
            "Pour in the batter.",
            "Cook until golden and crisp.",
            "Serve warm."
        ]
    },

    {
        name: "🥑 Avocado Toast",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800",
        description: "Creamy avocado spread over crispy toasted bread.",
        ingredients: [
            "2 slices bread",
            "1 ripe avocado",
            "1 teaspoon lemon juice",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Toast the bread until golden.",
            "Cut the avocado and remove the seed.",
            "Mash the avocado in a bowl.",
            "Mix in lemon juice, salt and pepper.",
            "Spread the avocado over the toast.",
            "Serve immediately."
        ]
    },

    {
        name: "🧀 Cheese Omelette",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1510693206972-df098f0cbfcb?w=800",
        description: "A simple fluffy omelette filled with melted cheese.",
        ingredients: [
            "3 eggs",
            "1/4 cup grated cheese",
            "1 tablespoon butter",
            "Salt",
            "Black pepper",
            "Chopped onion"
        ],
        instructions: [
            "Beat the eggs with salt and pepper.",
            "Melt butter in a non-stick pan.",
            "Pour in the eggs.",
            "Add onion and cheese.",
            "Cook until the eggs are mostly set.",
            "Fold the omelette in half.",
            "Cook briefly and serve."
        ]
    },

    {
        name: "🥣 Creamy Oatmeal",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=800",
        description: "Warm oatmeal that makes a comforting breakfast.",
        ingredients: [
            "1 cup oats",
            "2 cups milk",
            "1 tablespoon honey",
            "1 banana",
            "Cinnamon",
            "Berries"
        ],
        instructions: [
            "Add oats and milk to a saucepan.",
            "Cook over medium heat while stirring.",
            "Continue until the oats become creamy.",
            "Add honey and cinnamon.",
            "Top with sliced banana and berries.",
            "Serve while warm."
        ]
    },

    {
        name: "🥪 Breakfast Sandwich",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
        description: "A filling breakfast sandwich with egg and cheese.",
        ingredients: [
            "2 bread rolls",
            "2 eggs",
            "2 slices cheese",
            "Tomato",
            "Lettuce",
            "Butter"
        ],
        instructions: [
            "Toast the bread rolls lightly.",
            "Cook the eggs thoroughly.",
            "Add cheese while the eggs are hot.",
            "Place lettuce and tomato on the bread.",
            "Add the egg and cheese.",
            "Close the sandwich and serve."
        ]
    },

    {
        name: "🍓 Fruit & Yogurt Bowl",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
        description: "A colorful bowl of yogurt, fruit and crunchy toppings.",
        ingredients: [
            "1 cup plain yogurt",
            "1 banana",
            "Strawberries",
            "Blueberries",
            "1 tablespoon honey",
            "Granola"
        ],
        instructions: [
            "Add yogurt to a bowl.",
            "Slice the banana and strawberries.",
            "Add the fruit and blueberries.",
            "Sprinkle granola over the top.",
            "Drizzle with honey.",
            "Serve chilled."
        ]
    },

    {
        name: "🥔 Breakfast Potatoes",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=800",
        description: "Crispy seasoned potatoes that pair perfectly with eggs.",
        ingredients: [
            "4 potatoes",
            "1 onion",
            "2 tablespoons cooking oil",
            "Salt",
            "Black pepper",
            "Paprika"
        ],
        instructions: [
            "Wash and cut the potatoes into small pieces.",
            "Heat oil in a large pan.",
            "Add the potatoes and cook until tender.",
            "Add chopped onion.",
            "Season with salt, pepper and paprika.",
            "Continue cooking until golden and crisp.",
            "Serve hot."
        ]
    },


    // =========================
    // LUNCH — 10
    // =========================

    {
        name: "🍔 Classic Homemade Burger",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        description: "A classic juicy burger loaded with fresh toppings.",
        ingredients: [
            "Burger buns",
            "Beef patties",
            "Cheese",
            "Lettuce",
            "Tomato",
            "Onion",
            "Burger sauce"
        ],
        instructions: [
            "Cook the beef patties thoroughly.",
            "Toast the burger buns lightly.",
            "Add lettuce and sliced tomato.",
            "Place the cooked patty on the bun.",
            "Add cheese and onion.",
            "Add your favorite sauce.",
            "Close the burger and serve."
        ]
    },

    {
        name: "🌯 Chicken Wrap",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800",
        description: "A tasty wrap filled with cooked chicken and fresh vegetables.",
        ingredients: [
            "Tortilla wraps",
            "Cooked chicken",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Mayonnaise"
        ],
        instructions: [
            "Warm the tortilla.",
            "Spread mayonnaise over it.",
            "Add cooked chicken.",
            "Add lettuce and tomato.",
            "Sprinkle cheese over the filling.",
            "Fold the sides inward.",
            "Roll tightly and serve."
        ]
    },

    {
        name: "🍚 Chicken Rice Bowl",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
        description: "A satisfying bowl of rice, chicken and colorful vegetables.",
        ingredients: [
            "2 cups cooked rice",
            "Chicken breast",
            "Carrots",
            "Peas",
            "Sweetcorn",
            "Seasoning"
        ],
        instructions: [
            "Cook the chicken thoroughly and cut into pieces.",
            "Cook the vegetables until tender.",
            "Prepare the rice.",
            "Place rice in a bowl.",
            "Add chicken and vegetables.",
            "Season to taste.",
            "Serve warm."
        ]
    },

    {
        name: "🥗 Fresh Chicken Salad",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
        description: "A fresh salad with crunchy vegetables and cooked chicken.",
        ingredients: [
            "Lettuce",
            "Cooked chicken",
            "Tomatoes",
            "Cucumber",
            "Sweetcorn",
            "Carrots",
            "Salad dressing"
        ],
        instructions: [
            "Wash the vegetables.",
            "Chop the lettuce, tomato and cucumber.",
            "Grate or slice the carrots.",
            "Add sweetcorn.",
            "Add cooked chicken.",
            "Mix everything together.",
            "Add dressing before serving."
        ]
    },

    {
        name: "🥟 Vegetable Samosas",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        description: "Crispy pastry filled with seasoned vegetables.",
        ingredients: [
            "Samosa wrappers",
            "Potatoes",
            "Peas",
            "Onion",
            "Carrots",
            "Curry spices"
        ],
        instructions: [
            "Cook the potatoes until tender.",
            "Mash or chop the potatoes.",
            "Cook onion, peas and carrots.",
            "Mix the vegetables with spices.",
            "Fill each wrapper with the mixture.",
            "Seal the samosas carefully.",
            "Cook thoroughly until crisp and golden."
        ]
    },

    {
        name: "🍚 Vegetable Fried Rice",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
        description: "Quick fried rice packed with vegetables and flavor.",
        ingredients: [
            "Cooked rice",
            "Carrots",
            "Peas",
            "Sweetcorn",
            "Eggs",
            "Soy sauce",
            "Cooking oil"
        ],
        instructions: [
            "Heat oil in a large pan.",
            "Cook the vegetables until tender.",
            "Push the vegetables to one side.",
            "Cook the eggs thoroughly.",
            "Add the cooked rice.",
            "Add soy sauce.",
            "Stir everything together and serve hot."
        ]
    },

    {
        name: "🥪 Grilled Cheese Sandwich",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
        description: "Crispy toasted bread with delicious melted cheese.",
        ingredients: [
            "4 slices bread",
            "Cheese",
            "Butter",
            "Tomato",
            "Black pepper"
        ],
        instructions: [
            "Butter the outside of each bread slice.",
            "Place cheese between two slices.",
            "Add tomato if desired.",
            "Heat a pan over medium heat.",
            "Cook the sandwich until golden.",
            "Flip and cook the other side.",
            "Make sure the cheese has melted before serving."
        ]
    },

    {
        name: "🌮 Chicken Tacos",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800",
        description: "Tasty tacos filled with seasoned cooked chicken.",
        ingredients: [
            "Taco shells",
            "Cooked chicken",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Sour cream"
        ],
        instructions: [
            "Prepare the cooked chicken.",
            "Warm the taco shells.",
            "Fill each shell with chicken.",
            "Add lettuce and tomato.",
            "Add cheese.",
            "Top with sour cream.",
            "Serve immediately."
        ]
    },

    {
        name: "🍝 Chicken Pasta Salad",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
        description: "A refreshing pasta salad with chicken and vegetables.",
        ingredients: [
            "Cooked pasta",
            "Cooked chicken",
            "Cucumber",
            "Tomatoes",
            "Sweetcorn",
            "Mayonnaise"
        ],
        instructions: [
            "Cook the pasta according to the package directions.",
            "Allow the pasta to cool.",
            "Chop the vegetables.",
            "Add cooked chicken.",
            "Mix in the pasta.",
            "Add mayonnaise and mix.",
            "Chill before serving."
        ]
    },

    {
        name: "🍗 Chicken Sandwich",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800",
        description: "A satisfying sandwich packed with cooked chicken and vegetables.",
        ingredients: [
            "Bread",
            "Cooked chicken",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Mayonnaise"
        ],
        instructions: [
            "Toast the bread if desired.",
            "Spread mayonnaise over the bread.",
            "Add lettuce and tomato.",
            "Add thoroughly cooked chicken.",
            "Add cheese.",
            "Place the second slice of bread on top.",
            "Cut and serve."
        ]
    },


    // =========================
    // DINNER — 10
    // =========================

    {
        name: "🍕 Homemade Pizza",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
        description: "Classic homemade pizza with tomato sauce, cheese and vegetables.",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Peppers",
            "Onions",
            "Mushrooms"
        ],
        instructions: [
            "Preheat the oven according to your dough recipe.",
            "Roll the dough into a pizza shape.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella cheese.",
            "Add your vegetables and toppings.",
            "Bake until the crust is cooked and the cheese melts.",
            "Allow it to cool slightly before serving."
        ]
    },

    {
        name: "🍝 Creamy Pasta",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
        description: "Creamy pasta with garlic and Parmesan cheese.",
        ingredients: [
            "Pasta",
            "Cooking cream",
            "Garlic",
            "Parmesan cheese",
            "Butter",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Cook the pasta according to the package directions.",
            "Melt butter in a pan.",
            "Add chopped garlic and cook briefly.",
            "Add cooking cream.",
            "Add Parmesan cheese.",
            "Add the cooked pasta.",
            "Season and serve."
        ]
    },

    {
        name: "🍗 Roast Chicken",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800",
        description: "Tender roasted chicken seasoned with herbs and spices.",
        ingredients: [
            "Whole chicken",
            "Garlic",
            "Herbs",
            "Salt",
            "Black pepper",
            "Cooking oil"
        ],
        instructions: [
            "Preheat the oven.",
            "Prepare the chicken and pat it dry.",
            "Rub the chicken with oil and seasoning.",
            "Add garlic and herbs.",
            "Roast until the chicken is fully cooked.",
            "Check that the thickest part is safely cooked.",
            "Rest before serving."
        ]
    },

    {
        name: "🍜 Stir-Fry Noodles",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        description: "Quick noodles stir-fried with colorful vegetables.",
        ingredients: [
            "Noodles",
            "Carrots",
            "Peppers",
            "Onion",
            "Cabbage",
            "Soy sauce",
            "Cooking oil"
        ],
        instructions: [
            "Cook the noodles according to the package directions.",
            "Heat oil in a large pan.",
            "Cook the vegetables until slightly tender.",
            "Add the cooked noodles.",
            "Add soy sauce.",
            "Stir-fry everything together.",
            "Serve hot."
        ]
    },

    {
        name: "🍛 Chicken Curry",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        description: "A warm and flavorful chicken curry perfect for dinner.",
        ingredients: [
            "Chicken",
            "Onion",
            "Tomatoes",
            "Garlic",
            "Curry spices",
            "Cooking oil",
            "Coconut milk"
        ],
        instructions: [
            "Heat oil in a large pan.",
            "Cook the onion until softened.",
            "Add garlic and curry spices.",
            "Add chopped tomatoes.",
            "Add the chicken and cook thoroughly.",
            "Add coconut milk and simmer.",
            "Serve with rice."
        ]
    },

    {
        name: "🥩 Beef Stir-Fry",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        description: "Tender cooked beef with colorful stir-fried vegetables.",
        ingredients: [
            "Beef strips",
            "Bell peppers",
            "Onion",
            "Carrots",
            "Soy sauce",
            "Garlic",
            "Cooking oil"
        ],
        instructions: [
            "Slice the beef into thin strips.",
            "Heat oil in a large pan.",
            "Cook the beef thoroughly.",
            "Add onion, carrots and peppers.",
            "Add garlic and soy sauce.",
            "Stir everything together.",
            "Serve with rice or noodles."
        ]
    },

    {
        name: "🍲 Vegetable Soup",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
        description: "A comforting soup packed with vegetables.",
        ingredients: [
            "Potatoes",
            "Carrots",
            "Onion",
            "Peas",
            "Tomatoes",
            "Vegetable stock",
            "Seasoning"
        ],
        instructions: [
            "Wash and chop all vegetables.",
            "Cook onion in a large pot.",
            "Add the remaining vegetables.",
            "Pour in the vegetable stock.",
            "Bring the soup to a boil.",
            "Simmer until the vegetables are tender.",
            "Season and serve warm."
        ]
    },

    {
        name: "🍚 Beef & Rice",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
        description: "Seasoned beef served with fluffy rice and vegetables.",
        ingredients: [
            "Beef",
            "Rice",
            "Onion",
            "Carrots",
            "Peppers",
            "Garlic",
            "Seasoning"
        ],
        instructions: [
            "Cook the rice until tender.",
            "Cut the beef into small pieces.",
            "Cook the beef thoroughly in a pan.",
            "Add onion, garlic and vegetables.",
            "Season everything well.",
            "Serve the beef over rice.",
            "Add extra vegetables if desired."
        ]
    },

    {
        name: "🐟 Baked Fish",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
        description: "Simple baked fish with lemon, herbs and vegetables.",
        ingredients: [
            "Fish fillets",
            "Lemon",
            "Garlic",
            "Herbs",
            "Salt",
            "Black pepper",
            "Cooking oil"
        ],
        instructions: [
            "Preheat the oven.",
            "Place the fish on a baking tray.",
            "Add oil, lemon, garlic and herbs.",
            "Season with salt and pepper.",
            "Bake until the fish is fully cooked.",
            "Check that it flakes easily.",
            "Serve with vegetables or rice."
        ]
    },

    {
        name: "🥔 Shepherd's Pie",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800",
        description: "A comforting baked dish with savory filling and mashed potatoes.",
        ingredients: [
            "Minced beef",
            "Potatoes",
            "Carrots",
            "Peas",
            "Onion",
            "Gravy",
            "Butter"
        ],
        instructions: [
            "Boil potatoes until tender.",
            "Mash the potatoes with butter.",
            "Cook the minced beef thoroughly.",
            "Add onion, carrots and peas.",
            "Add gravy and mix well.",
            "Place the filling in a baking dish.",
            "Spread mashed potatoes over the top and bake until golden."
        ]
    },


    // =========================
    // SNACKS — 10
    // =========================

    {
        name: "🍟 Crispy Fries",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
        description: "Golden homemade potato fries that make an easy snack.",
        ingredients: [
            "Potatoes",
            "Cooking oil",
            "Salt",
            "Paprika"
        ],
        instructions: [
            "Wash and cut the potatoes into strips.",
            "Dry them thoroughly.",
            "Cook them until tender and golden.",
            "Drain excess oil safely.",
            "Season with salt and paprika.",
            "Serve warm."
        ]
    },

    {
        name: "🍿 Homemade Popcorn",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1578849278619-3f3f4a0c1a2e?w=800",
        description: "Simple homemade popcorn for movie nights and relaxing afternoons.",
        ingredients: [
            "Popcorn kernels",
            "Cooking oil",
            "Salt"
        ],
        instructions: [
            "Heat a small amount of oil in a pot.",
            "Add the popcorn kernels.",
            "Cover the pot.",
            "Cook until the popping slows down.",
            "Turn off the heat.",
            "Add salt and serve."
        ]
    },

    {
        name: "🧀 Cheesy Nachos",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800",
        description: "Crunchy tortilla chips covered with melted cheese and fresh toppings.",
        ingredients: [
            "Tortilla chips",
            "Grated cheese",
            "Tomatoes",
            "Onion",
            "Sweetcorn"
        ],
        instructions: [
            "Spread tortilla chips on a baking tray.",
            "Add grated cheese.",
            "Add chopped tomatoes, onion and sweetcorn.",
            "Heat until the cheese melts.",
            "Remove carefully.",
            "Allow to cool slightly before eating."
        ]
    },

    {
        name: "🥪 Mini Sandwiches",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
        description: "Small sandwiches that are perfect for sharing.",
        ingredients: [
            "Bread",
            "Cheese",
            "Lettuce",
            "Tomato",
            "Cucumber",
            "Mayonnaise"
        ],
        instructions: [
            "Spread mayonnaise on the bread.",
            "Add lettuce and sliced vegetables.",
            "Add cheese.",
            "Place another slice of bread on top.",
            "Cut into small pieces.",
            "Serve immediately."
        ]
    },

    {
        name: "🍌 Banana Bites",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800",
        description: "Simple banana bites with a sweet and crunchy topping.",
        ingredients: [
            "Bananas",
            "Yogurt",
            "Granola",
            "Honey"
        ],
        instructions: [
            "Peel the bananas.",
            "Cut them into bite-sized pieces.",
            "Add a small amount of yogurt.",
            "Sprinkle with granola.",
            "Drizzle lightly with honey.",
            "Serve chilled."
        ]
    },

    {
        name: "🥨 Soft Pretzels",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800",
        description: "Soft baked pretzels with a delicious golden crust.",
        ingredients: [
            "Flour",
            "Yeast",
            "Warm water",
            "Sugar",
            "Salt",
            "Butter"
        ],
        instructions: [
            "Mix flour, yeast, sugar and warm water.",
            "Knead until a soft dough forms.",
            "Let the dough rise.",
            "Shape the dough into pretzels.",
            "Bake until golden and cooked through.",
            "Brush with butter.",
            "Serve warm."
        ]
    },

    {
        name: "🌽 Buttered Corn",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800",
        description: "Sweet corn served warm with butter and seasoning.",
        ingredients: [
            "Corn",
            "Butter",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Cook the corn until tender.",
            "Drain any excess water.",
            "Add butter.",
            "Season with salt and pepper.",
            "Mix gently.",
            "Serve warm."
        ]
    },

    {
        name: "🍎 Apple & Peanut Butter",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800",
        description: "Crisp apple slices paired with creamy peanut butter.",
        ingredients: [
            "Apples",
            "Peanut butter",
            "Cinnamon"
        ],
        instructions: [
            "Wash the apples.",
            "Cut them into slices.",
            "Remove the seeds.",
            "Spread or serve with peanut butter.",
            "Add a small sprinkle of cinnamon.",
            "Serve fresh."
        ]
    },

    {
        name: "🥒 Veggie Sticks",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
        description: "Fresh crunchy vegetables served with a simple dip.",
        ingredients: [
            "Carrots",
            "Cucumber",
            "Bell peppers",
            "Yogurt",
            "Lemon"
        ],
        instructions: [
            "Wash all the vegetables.",
            "Cut them into sticks.",
            "Mix yogurt with a little lemon.",
            "Place vegetables on a plate.",
            "Serve with the yogurt dip."
        ]
    },

    {
        name: "🍞 Garlic Bread",
        category: "snacks",
       
        description: "Crispy bread flavored with garlic and butter.",
        ingredients: [
            "Bread",
            "Butter",
            "Garlic",
            "Parsley",
            "Salt"
        ],
        instructions: [
            "Mix softened butter with garlic and parsley.",
            "Spread the mixture over the bread.",
            "Place the bread on a baking tray.",
            "Bake until crisp and golden.",
            "Allow it to cool slightly.",
            "Serve warm."
        ]
    },


    // =========================
    // DESSERTS — 10
    // =========================

    {
        name: "🍰 Vanilla Cake",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
        description: "Soft homemade vanilla cake with a delicious sweet flavor.",
        ingredients: [
            "2 cups all-purpose flour",
            "1 cup sugar",
            "2 eggs",
            "1 cup milk",
            "1/2 cup butter",
            "2 teaspoons vanilla extract",
            "2 teaspoons baking powder"
        ],
        instructions: [
            "Preheat the oven to 180°C.",
            "Mix the flour, sugar and baking powder.",
            "Add eggs, milk, butter and vanilla.",
            "Mix until the batter is smooth.",
            "Pour into a greased cake pan.",
            "Bake until cooked through.",
            "Let the cake cool before serving."
        ]
    },

    {
        name: "🍩 Homemade Donuts",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
        description: "Soft homemade donuts finished with a sweet topping.",
        ingredients: [
            "Flour",
            "Sugar",
            "Milk",
            "Egg",
            "Yeast",
            "Butter"
        ],
        instructions: [
            "Mix the flour, yeast and sugar.",
            "Add milk, egg and butter.",
            "Knead into a soft dough.",
            "Allow the dough to rise.",
            "Shape into donuts.",
            "Cook thoroughly until golden.",
            "Add your favorite topping."
        ]
    },

    {
        name: "🍓 Strawberry Cheesecake",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
        description: "Creamy cheesecake topped with fresh strawberries.",
        ingredients: [
            "Cream cheese",
            "Sugar",
            "Eggs",
            "Vanilla",
            "Crushed biscuits",
            "Butter",
            "Strawberries"
        ],
        instructions: [
            "Mix crushed biscuits with melted butter.",
            "Press the mixture into a cake tin.",
            "Beat cream cheese, sugar, eggs and vanilla.",
            "Pour the filling over the base.",
            "Bake until set.",
            "Allow it to cool completely.",
            "Top with strawberries before serving."
        ]
    },

    {
        name: "🍪 Chocolate Chip Cookies",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
        description: "Soft cookies packed with chocolate chips.",
        ingredients: [
            "Flour",
            "Butter",
            "Sugar",
            "Egg",
            "Vanilla",
            "Chocolate chips",
            "Baking powder"
        ],
        instructions: [
            "Mix butter and sugar until combined.",
            "Add egg and vanilla.",
            "Add flour and baking powder.",
            "Mix in chocolate chips.",
            "Shape the dough into small balls.",
            "Place on a baking tray.",
            "Bake until the edges are golden."
        ]
    },

    {
        name: "🍫 Chocolate Brownies",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
        description: "Rich chocolate brownies with a soft center.",
        ingredients: [
            "Flour",
            "Cocoa powder",
            "Sugar",
            "Eggs",
            "Butter",
            "Chocolate",
            "Vanilla"
        ],
        instructions: [
            "Melt the butter and chocolate.",
            "Mix in the sugar.",
            "Add the eggs and vanilla.",
            "Add flour and cocoa powder.",
            "Mix until combined.",
            "Pour into a lined baking pan.",
            "Bake until set and cool before cutting."
        ]
    },

    {
        name: "🍌 Banana Bread",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1606101273945-e9eba8fa9c9b?w=800",
        description: "Moist banana bread made with ripe bananas.",
        ingredients: [
            "Ripe bananas",
            "Flour",
            "Sugar",
            "Eggs",
            "Butter",
            "Baking powder",
            "Cinnamon"
        ],
        instructions: [
            "Mash the ripe bananas.",
            "Mix with melted butter and sugar.",
            "Add eggs.",
            "Add flour, baking powder and cinnamon.",
            "Mix until combined.",
            "Pour into a loaf tin.",
            "Bake until cooked through."
        ]
    },

    {
        name: "🍮 Homemade Custard",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
        description: "Smooth creamy custard that can be served warm or chilled.",
        ingredients: [
            "Milk",
            "Egg yolks",
            "Sugar",
            "Vanilla",
            "Cornstarch"
        ],
        instructions: [
            "Warm the milk gently.",
            "Mix egg yolks, sugar and cornstarch.",
            "Slowly add the warm milk while stirring.",
            "Return the mixture to the pan.",
            "Cook gently while stirring until thick.",
            "Add vanilla.",
            "Serve warm or chilled."
        ]
    },

    {
        name: "🍋 Lemon Cake",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800",
        description: "Light and refreshing cake with a bright lemon flavor.",
        ingredients: [
            "Flour",
            "Sugar",
            "Eggs",
            "Butter",
            "Milk",
            "Lemon zest",
            "Lemon juice"
        ],
        instructions: [
            "Mix butter and sugar.",
            "Add eggs one at a time.",
            "Add flour and milk.",
            "Add lemon zest and juice.",
            "Mix until smooth.",
            "Pour into a greased cake tin.",
            "Bake until golden and cooked through."
        ]
    },

    {
        name: "🍎 Apple Crumble",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=800",
        description: "Warm baked apples covered with a crunchy crumble topping.",
        ingredients: [
            "Apples",
            "Flour",
            "Oats",
            "Sugar",
            "Butter",
            "Cinnamon"
        ],
        instructions: [
            "Peel and slice the apples.",
            "Place apples in a baking dish.",
            "Add cinnamon and a little sugar.",
            "Mix flour, oats, sugar and butter.",
            "Sprinkle the crumble mixture over the apples.",
            "Bake until golden and bubbling.",
            "Allow to cool slightly before serving."
        ]
    },

    {
        name: "🍓 Strawberry Shortcake",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
        description: "Soft cake layered with strawberries and creamy topping.",
        ingredients: [
            "Flour",
            "Sugar",
            "Eggs",
            "Butter",
            "Milk",
            "Strawberries",
            "Whipped cream"
        ],
        instructions: [
            "Prepare a simple cake batter.",
            "Pour the batter into a cake tin.",
            "Bake until cooked through.",
            "Allow the cake to cool.",
            "Slice the strawberries.",
            "Layer the cake with strawberries and whipped cream.",
            "Serve chilled."
        ]
    }

];

function displayRecipes() {

    const searchText = searchBox.value.toLowerCase().trim();

    const filteredRecipes = recipes.filter(function(recipe) {

        const matchesSearch =
            recipe.name.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    recipesContainer.innerHTML = "";

    if (filteredRecipes.length === 0) {
        recipesContainer.innerHTML = `
            <div class="no-results">
                <h3>😕 No recipes found</h3>
                <p>Try another food or category.</p>
            </div>
        `;
        return;
    }

    filteredRecipes.forEach(function(recipe) {

        const recipeCard = document.createElement("div");

        recipeCard.className = "recipe";

        recipeCard.innerHTML = `
            <img
                class="recipe-image"
                src="${recipe.image}"
                alt="${recipe.name}"
            >

            <div class="recipe-content">

                <span class="category-label">
                    ${recipe.category}
                </span>

                <h3>${recipe.name}</h3>

                <p class="recipe-description">
                    ${recipe.description}
                </p>

                <h4>🥘 Ingredients</h4>

                <ul>
                    ${recipe.ingredients.map(function(item) {
                        return `<li>${item}</li>`;
                    }).join("")}
                </ul>

                <h4>👨‍🍳 Instructions</h4>

                <ol>
                    ${recipe.instructions.map(function(step) {
                        return `<li>${step}</li>`;
                    }).join("")}
                </ol>

            </div>
        `;

        recipesContainer.appendChild(recipeCard);
    });
}

searchBox.addEventListener("input", function() {
    displayRecipes();
});

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCategory = button.dataset.category;

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayRecipes();
    });

});

categoryButtons[0].classList.add("active");

displayRecipes();