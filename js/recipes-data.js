/**
 * Recipe Data for Powered by Plants
 * ==================================
 * 
 * Edit this file to update recipe content.
 * Each recipe has the following structure:
 * 
 * 'recipe-id': {
 *   title: 'Recipe Name',
 *   chinese: '中文名稱',  // Leave empty string '' if no Chinese name
 *   tags: ['Tag1', 'Tag2'],  // Options: Chinese, Western, Japanese, Breakfast, Main, Quick, Salad
 *   time: '30 mins',
 *   servings: '4',
 *   difficulty: 'Easy',  // Options: Easy, Medium, Hard
 *   ingredients: [
 *     'Ingredient 1',
 *     'Ingredient 2'
 *   ],
 *   instructions: [
 *     'Step 1',
 *     'Step 2'
 *   ],
 *   tip: 'Optional helpful tip'
 * }
 */

const recipes = {
  // =============================================
  // CHINESE RECIPES
  // =============================================

  'spring-onion-noodles': {
    title: 'Noodles in Spring Onion & Soy Sauce',
    chinese: '蔥油拌麵',
    tags: ['Chinese', 'Quick', 'Main'],
    time: '15 mins',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      '200g dried noodles (wheat or rice)',
      '4-5 spring onions, finely sliced',
      '3 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '1 tsp sugar',
      '3 tbsp vegetable oil',
      'Pinch of white pepper'
    ],
    instructions: [
      'Cook noodles according to package instructions. Drain and set aside.',
      'Heat oil in a wok over medium heat. Add sliced spring onions and fry until slightly charred and fragrant (about 2-3 mins).',
      'Mix light soy sauce, dark soy sauce, and sugar in a small bowl.',
      'Pour the sauce mixture over the noodles and toss well.',
      'Top with the spring onion oil and serve immediately.'
    ],
    tip: 'The key is to char the spring onions slightly to release their sweetness. Don\'t skip the dark soy sauce - it adds colour and depth!'
  },

  'creamed-cabbage': {
    title: 'Chinese Creamed Cabbage',
    chinese: '奶油津白',
    tags: ['Chinese', 'Main'],
    time: '25 mins',
    servings: '4',
    difficulty: 'Easy',
    ingredients: [
      '1 head napa cabbage (about 500g), cut into chunks',
      '200ml kombu dashi stock (vegan substitute for chicken stock)',
      '100ml coconut cream or oat cream',
      '2 tbsp vegetable oil',
      '3 cloves garlic, minced',
      '1 tsp salt',
      '1/2 tsp white pepper',
      '1 tbsp cornstarch mixed with 2 tbsp water'
    ],
    instructions: [
      'Prepare kombu dashi by soaking dried kombu in water for 30 mins or simmering for 10 mins.',
      'Heat oil in a wok, sauté garlic until fragrant.',
      'Add cabbage and stir-fry for 2 minutes.',
      'Pour in the kombu stock, cover and simmer for 10 minutes until cabbage is tender.',
      'Add coconut cream, salt, and pepper. Stir gently.',
      'Add cornstarch slurry to thicken. Serve hot.'
    ],
    tip: 'Kombu dashi gives this dish a wonderful umami depth that\'s very similar to the original!'
  },

  'shanghai-rice-cake': {
    title: 'Shanghainese Stir-Fried Rice Cake',
    chinese: '上海炒年糕',
    tags: ['Chinese', 'Main'],
    time: '30 mins',
    servings: '3-4',
    difficulty: 'Medium',
    ingredients: [
      '400g sliced rice cakes (nian gao)',
      '100g shiitake mushrooms, sliced',
      '50g wood ear mushrooms, soaked and sliced',
      '100g deep-fried tofu puffs, halved',
      '1 cup shredded cabbage',
      '2 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '1 tsp sugar',
      '2 tbsp vegetable oil',
      '100ml vegetable stock or water'
    ],
    instructions: [
      'Soak rice cakes in warm water for 10-15 minutes to soften if dried.',
      'Heat oil in a wok over high heat. Stir-fry shiitake and wood ear mushrooms for 2 minutes.',
      'Add tofu puffs and cabbage. Stir-fry for another 2 minutes.',
      'Add rice cakes and stock. Cook until liquid is mostly absorbed.',
      'Season with soy sauces and sugar. Toss everything together.',
      'Serve hot while rice cakes are still chewy!'
    ],
    tip: 'The rice cakes should be soft but still chewy. Don\'t overcook or they become mushy!'
  },

  'braised-vegetables': {
    title: 'Braised Vegetables with Red Fermented Beancurd',
    chinese: '南乳齋煲',
    tags: ['Chinese', 'Main'],
    time: '45 mins',
    servings: '4-6',
    difficulty: 'Medium',
    ingredients: [
      '2 blocks firm tofu, cubed and fried',
      '100g shiitake mushrooms',
      '1 carrot, sliced',
      '100g lotus root, sliced',
      '50g wood ear mushrooms, soaked',
      '100g napa cabbage',
      '2-3 cubes red fermented beancurd (nam yu)',
      '2 tbsp fermented beancurd liquid',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '300ml vegetable stock'
    ],
    instructions: [
      'Mash the red fermented beancurd with its liquid to form a paste.',
      'Heat oil in a clay pot or heavy pan. Add the beancurd paste and fry until fragrant.',
      'Add harder vegetables first (lotus root, carrot) and stir-fry for 2 minutes.',
      'Add mushrooms, tofu, and cabbage. Pour in stock.',
      'Season with soy sauce and sugar. Cover and braise for 25-30 minutes.',
      'Check seasoning and serve hot in the clay pot.'
    ],
    tip: 'This is a traditional Buddhist vegetarian dish. The red fermented beancurd gives it a distinctive savoury-sweet flavour!'
  },

  'liang-pi': {
    title: 'Cold Liang Pi with Cucumber',
    chinese: '麻醬涼皮',
    tags: ['Chinese', 'Quick'],
    time: '10 mins (if using store-bought)',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      '200g liang pi noodles (store-bought)',
      '1 cucumber, julienned',
      '2 tbsp Chinese sesame paste (tahini works too)',
      '2 tbsp rice vinegar',
      '1 tbsp light soy sauce',
      '2 cloves garlic, minced',
      '2 tbsp chilli oil',
      '1 tsp sugar',
      'Handful of bean sprouts (optional)',
      'Coriander to garnish'
    ],
    instructions: [
      'If using store-bought liang pi, rinse briefly and drain well.',
      'Make the sauce: mix sesame paste with a splash of water to loosen, then add vinegar, soy sauce, garlic, and sugar.',
      'Arrange liang pi on a plate. Top with cucumber and bean sprouts.',
      'Drizzle the sesame sauce generously over the noodles.',
      'Finish with chilli oil to taste and garnish with coriander.',
      'Toss everything together before eating!'
    ],
    tip: 'This is a perfect summer dish! Adjust the chilli oil to your spice preference.'
  },

  'fish-fragrant-aubergine': {
    title: 'Sichuan "Fish-Fragrant" Aubergine Stew',
    chinese: '素魚香茄子',
    tags: ['Chinese', 'Main'],
    time: '35 mins',
    servings: '3-4',
    difficulty: 'Medium',
    ingredients: [
      '2 large aubergines, cut into chunks',
      '100g shiitake mushrooms, diced (replacing the meat)',
      '3 tbsp doubanjiang (Sichuan chilli bean paste)',
      '2 tbsp light soy sauce',
      '1 tbsp Chinese black vinegar',
      '1 tbsp sugar',
      '4 cloves garlic, minced',
      '1 inch ginger, minced',
      '3 spring onions, chopped',
      '1 tbsp cornstarch mixed with 100ml water',
      'Oil for frying'
    ],
    instructions: [
      'Salt aubergine chunks for 15 mins, then rinse and pat dry.',
      'Deep fry or air-fry aubergine until golden. Set aside.',
      'Heat 2 tbsp oil, fry shiitake mushrooms until browned.',
      'Add doubanjiang, garlic, and ginger. Fry until fragrant and oil turns red.',
      'Add soy sauce, vinegar, and sugar. Stir to combine.',
      'Return aubergine to the wok. Add cornstarch mixture and toss until sauce thickens.',
      'Garnish with spring onions and serve immediately.'
    ],
    tip: '"Fish-fragrant" doesn\'t contain fish! It\'s a flavour profile from Sichuan that\'s sweet, sour, and spicy.'
  },

  // =============================================
  // WESTERN RECIPES
  // =============================================

  'mushroom-bourguignon': {
    title: 'Mushroom Bourguignon',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '1 hour',
    servings: '4-6',
    difficulty: 'Medium',
    ingredients: [
      '500g mixed mushrooms (portobello, cremini, shiitake), quartered',
      '200g pearl onions or shallots',
      '2 carrots, chunked',
      '3 cloves garlic, minced',
      '2 tbsp tomato paste',
      '500ml red wine',
      '250ml vegetable stock',
      '2 sprigs fresh thyme',
      '2 bay leaves',
      '2 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat oil in a large Dutch oven. Brown mushrooms in batches. Set aside.',
      'Sauté pearl onions and carrots until golden, about 8 minutes.',
      'Add garlic and tomato paste. Cook for 1 minute.',
      'Pour in red wine, scraping up any browned bits.',
      'Add stock, thyme, bay leaves, and return mushrooms to pot.',
      'Simmer uncovered for 30-40 minutes until sauce thickens.',
      'Season with salt and pepper. Serve with couscous or mashed potatoes.'
    ],
    tip: 'Use a good wine you\'d actually drink! The flavour concentrates as it cooks.'
  },

  'mushroom-risotto': {
    title: 'Mushroom Risotto with Caramelised Leek',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '45 mins',
    servings: '4',
    difficulty: 'Medium',
    ingredients: [
      '300g arborio rice',
      '300g mixed mushrooms, sliced',
      '2 large leeks, sliced into rings',
      '1 litre hot vegetable stock',
      '150ml white wine',
      '3 tbsp olive oil',
      '3 tbsp nutritional yeast (for cheesy flavour)',
      '2 cloves garlic, minced',
      'Salt and pepper to taste',
      'Fresh parsley to garnish'
    ],
    instructions: [
      'In a pan, slowly caramelise leeks in 1 tbsp oil over low heat for 15-20 mins. Set aside.',
      'Sauté mushrooms in 1 tbsp oil until golden. Set aside.',
      'Heat remaining oil, add garlic and rice. Toast for 1 minute.',
      'Add wine and stir until absorbed.',
      'Add stock one ladle at a time, stirring frequently, until rice is creamy and al dente (about 20 mins).',
      'Stir in nutritional yeast and half the mushrooms.',
      'Top with caramelised leeks and remaining mushrooms. Season and serve.'
    ],
    tip: 'The key to risotto is patience! Keep the stock warm and add gradually.'
  },

  'mushroom-soup': {
    title: 'Mushroom and Onion Soup',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '40 mins',
    servings: '4',
    difficulty: 'Easy',
    ingredients: [
      '400g mixed mushrooms, sliced',
      '2 large onions, thinly sliced',
      '4 cloves garlic, minced',
      '1 litre vegetable stock',
      '2 tbsp olive oil',
      '2 tbsp soy sauce',
      '1 tsp fresh thyme',
      'Salt and pepper to taste',
      'Crusty sourdough to serve'
    ],
    instructions: [
      'Heat oil in a large pot. Add onions and cook slowly until deeply caramelised (about 20 mins).',
      'Add mushrooms and garlic. Cook until mushrooms release their liquid and brown.',
      'Pour in stock and soy sauce. Add thyme.',
      'Simmer for 15 minutes.',
      'Season with salt and pepper.',
      'Serve in bowls with thick slices of toasted sourdough.'
    ],
    tip: 'Low and slow is the secret for the onions. Don\'t rush the caramelisation!'
  },

  'madras-curry': {
    title: 'Madras Curry with Juicy Marbles',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '45 mins',
    servings: '4',
    difficulty: 'Easy',
    ingredients: [
      '200g Juicy Marbles (or other vegan steak), cubed',
      '1 can chickpeas, drained',
      '100g red lentils',
      '1 can chopped tomatoes',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '2 tbsp Madras curry powder',
      '1 tsp garam masala',
      '400ml coconut milk',
      '2 tbsp vegetable oil',
      'Fresh coriander to serve'
    ],
    instructions: [
      'Sear Juicy Marbles cubes in hot oil until browned. Set aside.',
      'Sauté onion until soft. Add garlic and spices, cook for 1 minute.',
      'Add tomatoes, lentils, and coconut milk. Simmer for 20 mins.',
      'Add chickpeas and cook for another 10 mins until lentils are soft.',
      'Return the Juicy Marbles to the curry.',
      'Garnish with fresh coriander. Serve with rice or naan.'
    ],
    tip: 'Juicy Marbles have an amazing meaty texture. If unavailable, use seitan or extra chickpeas!'
  },

  'lions-mane-steak': {
    title: 'Pan-Fried Lion\'s Mane Mushroom Steak',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '20 mins',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      '2 large lion\'s mane mushrooms',
      '3 tbsp olive oil',
      '3 tbsp vegan butter',
      '4 cloves garlic, smashed',
      'Fresh thyme and rosemary',
      'Salt and pepper',
      'Lemon juice to finish'
    ],
    instructions: [
      'Slice lion\'s mane into 2cm thick "steaks".',
      'Season generously with salt and pepper.',
      'Heat oil in a cast iron pan over medium-high heat.',
      'Add mushroom steaks and press down gently. Cook for 4-5 mins until golden.',
      'Flip, add butter, garlic, and herbs. Baste the mushrooms with the butter.',
      'Cook another 4-5 mins. Squeeze lemon juice over and serve immediately.'
    ],
    tip: 'Lion\'s mane has a seafood-like texture, almost like crab! Don\'t skip the basting step.'
  },

  'pesto-pasta': {
    title: 'All Variations of Pesto Pasta',
    chinese: '',
    tags: ['Western', 'Main', 'Quick'],
    time: '20 mins',
    servings: '4',
    difficulty: 'Easy',
    ingredients: [
      '400g pasta of choice',
      '100g fresh basil (or spinach, or roasted veg)',
      '50g pine nuts (or walnuts, cashews)',
      '3 cloves garlic',
      '50g nutritional yeast or vegan parmesan',
      '100ml extra virgin olive oil',
      'Salt to taste',
      'Juice of half a lemon'
    ],
    instructions: [
      'Toast nuts in a dry pan until golden. Let cool.',
      'Blend nuts, greens, garlic, and nutritional yeast in a food processor.',
      'With motor running, slowly drizzle in olive oil until smooth.',
      'Season with salt and lemon juice.',
      'Cook pasta al dente. Reserve 1 cup pasta water.',
      'Toss hot pasta with pesto, adding pasta water to loosen.',
      'Serve topped with extra nuts and a drizzle of oil.'
    ],
    tip: 'Try different bases: spinach + walnut, roasted aubergine, sun-dried tomato, or mushroom + thyme!'
  },

  'cauliflower-steak': {
    title: 'Roasted / Air-Fried Cauliflower Steak',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '35 mins',
    servings: '2-4',
    difficulty: 'Easy',
    ingredients: [
      '1 large head cauliflower',
      '3 tbsp olive oil',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1/2 tsp cumin',
      'Salt and pepper',
      'Tahini sauce or chimichurri to serve',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Preheat oven to 200°C or air fryer to 190°C.',
      'Remove leaves and trim stem, keeping core intact.',
      'Cut cauliflower into 2-3cm thick steaks from the centre.',
      'Mix oil with spices. Brush generously on both sides of steaks.',
      'Roast for 25-30 mins (flip halfway) or air-fry for 18-20 mins.',
      'Cauliflower should be golden and tender when pierced.',
      'Drizzle with tahini or chimichurri. Garnish with herbs.'
    ],
    tip: 'Save the florets that fall off for another dish! They\'re great roasted too.'
  },

  'grain-stir-fry': {
    title: 'Leek, Quinoa, Lentil & Bulgur Wheat Stir-Fry',
    chinese: '',
    tags: ['Western', 'Main'],
    time: '30 mins',
    servings: '4',
    difficulty: 'Easy',
    ingredients: [
      '100g quinoa, cooked',
      '100g bulgur wheat, cooked',
      '100g green or brown lentils, cooked',
      '2 large leeks, sliced',
      '200g firm tofu, cubed',
      '3 tbsp soy sauce',
      '2 tbsp olive oil',
      '1 tsp cumin',
      'Fresh parsley',
      'Lemon juice'
    ],
    instructions: [
      'Cook grains and lentils according to package instructions. Can be done ahead.',
      'Press tofu and cube. Pan-fry until golden on all sides. Set aside.',
      'Sauté leeks in olive oil until soft and slightly caramelised.',
      'Add all cooked grains and lentils to the pan.',
      'Season with soy sauce and cumin. Toss well.',
      'Add tofu back to the pan. Heat through.',
      'Finish with fresh parsley and a squeeze of lemon.'
    ],
    tip: 'This is a meal-prep champion! The grains keep well and it\'s even better the next day.'
  },

  // =============================================
  // JAPANESE RECIPES
  // =============================================

  'miso-aubergine': {
    title: 'Miso Aubergine (Nasu Dengaku)',
    chinese: '',
    tags: ['Japanese', 'Main'],
    time: '30 mins',
    servings: '2-4',
    difficulty: 'Easy',
    ingredients: [
      '2 large aubergines',
      '3 tbsp white miso paste',
      '2 tbsp mirin',
      '1 tbsp sake or rice wine',
      '2 tbsp sugar',
      '1 tbsp sesame oil',
      'Sesame seeds for garnish',
      'Spring onions, sliced'
    ],
    instructions: [
      'Preheat oven to 200°C. Halve aubergines lengthwise.',
      'Score the flesh in a crosshatch pattern. Brush with sesame oil.',
      'Roast cut-side down for 15 mins until soft.',
      'Meanwhile, mix miso, mirin, sake, and sugar in a small pan. Heat gently until sugar dissolves.',
      'Flip aubergines. Spread miso glaze generously on the cut surface.',
      'Roast for another 10-15 mins until glaze is bubbling and caramelised.',
      'Garnish with sesame seeds and spring onions.'
    ],
    tip: 'The glaze should be sweet and savoury with a slight char. Watch it doesn\'t burn!'
  },

  // =============================================
  // SALADS & LIGHT
  // =============================================

  'combo-salad': {
    title: 'All Combos Salad',
    chinese: '',
    tags: ['Western', 'Salad', 'Quick'],
    time: '15 mins',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      'Mixed leaves (rocket, spinach, lettuce)',
      '1 head chicory, leaves separated',
      'Cherry tomatoes, halved',
      '1 cooked beetroot, cubed',
      'Roasted mushrooms and aubergine',
      '1 courgette, ribboned or grilled',
      'Handful of mixed nuts (walnuts, almonds, pine nuts)',
      'Your favourite vinaigrette'
    ],
    instructions: [
      'Prepare all vegetables as described. Roast mushrooms and aubergine if not already done.',
      'Arrange mixed leaves as a base.',
      'Artfully arrange all the vegetables on top.',
      'Scatter nuts generously.',
      'Drizzle with your favourite vinaigrette just before serving.',
      'Season with salt and pepper.'
    ],
    tip: 'The beauty of this salad is variety. Use whatever you have! Roasted veg from yesterday works perfectly.'
  },

  'bruschetta': {
    title: 'Tomato and Basil Bruschetta',
    chinese: '',
    tags: ['Western', 'Quick'],
    time: '10 mins',
    servings: '4',
    difficulty: 'Easy',
    ingredients: [
      '4 ripe tomatoes, diced',
      'Handful fresh basil, torn',
      '2 cloves garlic (1 minced, 1 halved)',
      '3 tbsp extra virgin olive oil',
      '1 tbsp balsamic vinegar',
      'Salt and pepper',
      '1 baguette or ciabatta, sliced',
      'Flaky sea salt to finish'
    ],
    instructions: [
      'Mix diced tomatoes with minced garlic, basil, olive oil, and balsamic.',
      'Season with salt and pepper. Let marinate for 5-10 minutes.',
      'Toast bread slices until golden.',
      'Rub the cut side of garlic clove on warm toast.',
      'Spoon tomato mixture generously onto each slice.',
      'Finish with a drizzle of olive oil and flaky salt.'
    ],
    tip: 'Use the ripest tomatoes you can find. Room temperature tomatoes have the best flavour!'
  },

  // =============================================
  // BREAKFAST
  // =============================================

  'avocado-toast': {
    title: 'Smashed Avocado on Toast',
    chinese: '',
    tags: ['Breakfast', 'Western', 'Quick'],
    time: '5 mins',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      '2 ripe avocados',
      '4 slices good sourdough bread',
      'Juice of 1 lime',
      'Pinch of chilli flakes',
      'Salt and pepper',
      'Optional: cherry tomatoes, microgreens, seeds'
    ],
    instructions: [
      'Toast sourdough until golden and crispy.',
      'Halve avocados and scoop into a bowl.',
      'Add lime juice, salt, and pepper. Mash with a fork to desired consistency.',
      'Pile generously onto hot toast.',
      'Top with chilli flakes and any optional toppings.',
      'Serve immediately!'
    ],
    tip: 'The bread must be very well toasted to contrast with the creamy avocado. Add everything bagel seasoning for extra flavour!'
  },

  'porridge': {
    title: 'Porridge with All the Toppings',
    chinese: '',
    tags: ['Breakfast'],
    time: '10 mins',
    servings: '2',
    difficulty: 'Easy',
    ingredients: [
      '100g rolled oats',
      '400ml oat milk (or water)',
      '1 tbsp chia seeds',
      '1 tbsp flaxseed',
      '2 tbsp peanut butter',
      'Handful dried fruits (dates, raisins, apricots)',
      '1 tbsp cacao nibs',
      'Pinch of cinnamon',
      'Maple syrup to taste'
    ],
    instructions: [
      'Add oats and milk to a pot. Bring to a simmer.',
      'Stir in chia seeds and flaxseed. Cook for 5-7 minutes, stirring occasionally.',
      'Add more milk if you prefer a thinner consistency.',
      'Transfer to bowls. Top with peanut butter, dried fruits, and cacao nibs.',
      'Drizzle with maple syrup and sprinkle with cinnamon.',
      'Enjoy warm!'
    ],
    tip: 'Prep the dry ingredients in jars for quick weekday breakfasts. Overnight oats work great with this combo too!'
  }
};
