enum APIRoute {
    Register = "/register",
    LogIn = "/login",
    LogOut = "/logout",

    AddDeck = "/deck/add",
    PopularDecks = "/deck/popular",
    DeckByID = "/deck/byID", // needs a /:deckId appended
    OwnersDecks = "/deck/owner",
    SearchDeck = "/deck/search", // needs a /:deckSearchKey appended

    PostVotes = "/votes/byDeckID", // needs a /:deckId appended

    Owner = "/user/owner",
    UserByID = "/user/byID", // needs a /:userId appended
    DeleteUser = "/user/delete",

    CardsByDeckID = "/card/byDeckID", // needs a /:deckId appended
    CardByID = "/card/byID", // needs a /id appended

    AddComment = "/comments/addComment",
    CommentsByDeckId = "/comments/byDeckID", // needs a /:deckId appended
    CommentById = "/comments/byID", // needs a /:commentId appended

    GroupById = "/group/byId", // needs a /:groupId appended
    AddGroup = "/group/add",

    GroupUsersByGroupId = "/group/users/byId", // needs a /:groupId appended
    ChangeGroupUsersPermissions = "/group/changePermission", // needs a /:groupId appended
    AddGroupUser = "/group/users/add", // requires a /:groupId appended
    DeleteGroupUser = "/group/user", // requires a /:groupId appended

    BulletinsByGroupId = "/bulletin/byGroupId", // requires a /:groupId appended
    BulletinsById = "/bulletin/byId", // requires a /:bulletinId appended
    AddBulletin = "bulletin/add", // requires a /:groupId appended


    AddDiscussion = "/discussion/add", // requires a /:groupId appended
    DiscussionsByGroupId = '/discussion/byGroupId', // requires a /:groupId appended 
    DiscussionById = "/discussion/byId", // requires a /:discussionId appended

    DiscussionCommentsByDiscussionId = "/discussion/comment/byDiscussionId", // requires a /:discussionId appended
    AddDiscussionComment = "/discussion/comment/add", // requires a /:discussionId appended
    DiscussionCommentById = "/discussion/comment/byId" // requires a /:discussionCommentId appended

} 

export { APIRoute };