import { connectToDB } from "../../../../utils/database";
import mongoose from "mongoose";
import events from "../../../../models/events";

export const GET = async () => {
  try {
    await connectToDB();

    const currentDate = new Date(); // Get the current date
    const upcomingActivities = await events.find({
      start_date: { $gt: currentDate },
    }); // Filter for events before the current date

    // Transform the events into activities
    const activities = upcomingActivities.map((event) => ({
      date: event.end_date.toISOString().split("T")[0], // Format the date as YYYY-MM-DD
      title: event.event_name,
    }));

    // Check if there are any events
    if (!upcomingActivities || upcomingActivities.length === 0) {
      return new Response(
        JSON.stringify({ message: "No Recent Activities found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(activities), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching events: ", error);
    return new Response("Failed to fetch events", { status: 500 });
  }
};
