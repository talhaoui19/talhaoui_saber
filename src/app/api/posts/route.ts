import { PostModal } from "@/lib/models/Post";
import { connectMongoDB } from "../../../lib/mongodb";

export async function GET() {
  await connectMongoDB();

  try {
    const posts = await PostModal.find({}).sort({ createdAt: -1 });
    console.log(posts, 'this is from the get handler');
    
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch posts"+error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
