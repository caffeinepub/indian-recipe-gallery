import List "mo:core/List";
import Text "mo:core/Text";

actor {
  type Recipe = {
    name : Text;
    description : Text;
    cuisineType : Text;
    difficultyLevel : Text;
    cookingTime : Nat;
    ingredients : [Text];
    videoUrl : Text;
  };

  let recipesList = List.fromArray<Recipe>([
    {
      name = "Masala Dosa";
      description = "Crispy rice and lentil crepes filled with spicy potato mixture.";
      cuisineType = "South Indian";
      difficultyLevel = "Medium";
      cookingTime = 90;
      ingredients = [
        "Rice",
        "Urad dal",
        "Potatoes",
        "Onions",
        "Spices",
      ];
      videoUrl = "https://videos.chefverse.com/indian/masala-dosa";
    },
    {
      name = "Chole Bhature";
      description = "Spiced chickpea curry served with deep-fried bread.";
      cuisineType = "North Indian";
      difficultyLevel = "Medium";
      cookingTime = 75;
      ingredients = [
        "Chickpeas",
        "Flour",
        "Spices",
        "Yogurt",
      ];
      videoUrl = "https://videos.chefverse.com/indian/chole-bhature";
    },
    {
      name = "Paneer Tikka";
      description = "Grilled cubes of paneer marinated in spices.";
      cuisineType = "North Indian";
      difficultyLevel = "Easy";
      cookingTime = 40;
      ingredients = [
        "Paneer",
        "Yogurt",
        "Spices",
        "Vegetables",
      ];
      videoUrl = "https://videos.chefverse.com/indian/paneer-tikka";
    },
    {
      name = "Biryani (Veg)";
      description = "Fragrant rice dish with vegetables and aromatic spices.";
      cuisineType = "Hyderabadi";
      difficultyLevel = "Hard";
      cookingTime = 120;
      ingredients = [
        "Rice",
        "Vegetables",
        "Spices",
        "Yogurt",
      ];
      videoUrl = "https://videos.chefverse.com/indian/biryani";
    },
    {
      name = "Rasgulla";
      description = "Soft cheese balls soaked in sugar syrup.";
      cuisineType = "Bengali";
      difficultyLevel = "Medium";
      cookingTime = 45;
      ingredients = [
        "Paneer",
        "Sugar",
        "Water",
        "Cardamom",
      ];
      videoUrl = "https://videos.chefverse.com/indian/rasgulla";
    },
    {
      name = "Samosa";
      description = "Deep-fried pastry filled with spiced potatoes and peas.";
      cuisineType = "North Indian";
      difficultyLevel = "Medium";
      cookingTime = 60;
      ingredients = [
        "Flour",
        "Potatoes",
        "Peas",
        "Spices",
      ];
      videoUrl = "https://videos.chefverse.com/indian/samosa";
    },
    {
      name = "Idli";
      description = "Steamed rice and lentil cakes.";
      cuisineType = "South Indian";
      difficultyLevel = "Easy";
      cookingTime = 35;
      ingredients = [
        "Rice",
        "Urad dal",
        "Salt",
      ];
      videoUrl = "https://videos.chefverse.com/indian/idli";
    },
    {
      name = "Gulab Jamun";
      description = "Fried dough balls soaked in rose-flavored sugar syrup.";
      cuisineType = "Pan-Indian";
      difficultyLevel = "Medium";
      cookingTime = 50;
      ingredients = [
        "Milk powder",
        "Flour",
        "Sugar",
        "Cardamom",
      ];
      videoUrl = "https://videos.chefverse.com/indian/gulab-jamun";
    },
    {
      name = "Aloo Paratha";
      description = "Stuffed Indian flatbread with spicy potato filling.";
      cuisineType = "Punjabi";
      difficultyLevel = "Easy";
      cookingTime = 30;
      ingredients = [
        "Wheat flour",
        "Potatoes",
        "Spices",
        "Butter",
      ];
      videoUrl = "https://videos.chefverse.com/indian/aloo-paratha";
    },
    {
      name = "Pav Bhaji";
      description = "Spicy mixed vegetable curry served with buttered bread rolls.";
      cuisineType = "Maharashtrian";
      difficultyLevel = "Easy";
      cookingTime = 35;
      ingredients = [
        "Mixed vegetables",
        "Bread rolls",
        "Spices",
        "Butter",
      ];
      videoUrl = "https://videos.chefverse.com/indian/pav-bhaji";
    },
    {
      name = "Raita";
      description = "Yogurt-based side dish with vegetables and spices.";
      cuisineType = "North Indian";
      difficultyLevel = "Easy";
      cookingTime = 10;
      ingredients = [
        "Yogurt",
        "Cucumber",
        "Spices",
        "Tomato",
      ];
      videoUrl = "https://videos.chefverse.com/indian/raita";
    },
    {
      name = "Daal Makhani";
      description = "Creamy lentil curry cooked with butter and spices.";
      cuisineType = "Punjabi";
      difficultyLevel = "Medium";
      cookingTime = 90;
      ingredients = [
        "Black lentils",
        "Kidney beans",
        "Butter",
        "Spices",
      ];
      videoUrl = "https://videos.chefverse.com/indian/daal-makhani";
    },
    {
      name = "Chai Tea";
      description = "Spiced black tea beverage.";
      cuisineType = "Pan-Indian";
      difficultyLevel = "Easy";
      cookingTime = 15;
      ingredients = [
        "Black tea",
        "Spices",
        "Milk",
        "Sugar",
      ];
      videoUrl = "https://videos.chefverse.com/indian/chai";
    },
  ]);

  public query ({ caller }) func getRecipes() : async [Recipe] {
    recipesList.toArray();
  };

  public query ({ caller }) func getRecipeByName(name : Text) : async ?Recipe {
    recipesList.find(func(r) { r.name.contains(#text name) });
  };
};
