const conf={
    appwriteUrl:String(Process.env.REACT_APP_APPWRITE_URL),
    appwriteprojectId:String(Process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwritedatabaseId:String(Process.env.REACT_APP_APPWRITE_DATABASE_ID),
    appwritecollectId:String(Process.env.REACT_APP_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(Process.env.REACT_APP_APPWRITE_BUCKET_ID)
}
export default conf;