enum APIRoute {
    Register = "/register",
    LogIn = "/login",
    LogOut = "/logout",

    AddDeck = "/deck/add",
    PopularDecks = "/deck/popular",
    DeckByID = "/deck/byID", // needs a /id appended
    OwnersDecks = "/deck/owner",

    Owner = "/user/owner",
    UserByID = "/user/byID", // needs a /id appended
    DeleteUser = "/user/delete",

    CardsByDeckID = "/card/byDeckID", // needs a /id appended
    CardByID = "/card/byID" // needs a /id appended
} 

export {APIRoute};