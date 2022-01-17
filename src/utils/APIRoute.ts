enum APIRoute {
    Register = "/register",
    LogIn = "/login",
    LogOut = "/logout",

    AddDeck = "/deck/add",
    PopularDecks = "/deck/popular",
    DeckByID = "/deck/byID", // needs a /:deckId appended
    OwnersDecks = "/deck/owner",

    PostVotes = "/votes/byDeckID", // needs a /:deckId appended

    Owner = "/user/owner",
    UserByID = "/user/byID", // needs a /:userId appended
    DeleteUser = "/user/delete",

    CardsByDeckID = "/card/byDeckID", // needs a /:deckId appended
    CardByID = "/card/byID", // needs a /id appended

    AddComment = "/comments/addComment",
    CommentsByDeckId = "/comments/byDeckID" // needs a /:deckId appended
} 

export {APIRoute};