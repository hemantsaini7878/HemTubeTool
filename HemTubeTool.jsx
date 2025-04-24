
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function HemTubeTool() {
  const [videoUrl, setVideoUrl] = useState("");
  const [output, setOutput] = useState(null);

  const handleDownload = () => {
    setOutput({
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      tags: ["funny", "music", "80s", "rickroll"],
      title: "Rick Astley - Never Gonna Give You Up",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Hem Tube Tool</h1>
      <p className="mb-6 text-center max-w-xl">Download YouTube videos, extract thumbnails, and grab tags instantly — One Tool, Many Solutions.</p>

      <Card className="w-full max-w-lg">
        <CardContent className="p-4 space-y-4">
          <Input
            placeholder="Paste YouTube video link here"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <Button onClick={handleDownload} className="w-full flex gap-2">
            <Download className="w-5 h-5" /> Download & Extract
          </Button>
        </CardContent>
      </Card>

      {output && (
        <div className="mt-6 bg-white rounded-xl shadow-md p-4 w-full max-w-lg">
          <img src={output.thumbnail} alt="Thumbnail" className="rounded-xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">{output.title}</h2>
          <p className="mb-2 font-medium">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {output.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 text-center text-sm text-gray-600">
        © 2025 Hem Tube Tool | Made with ❤️ for creators
      </div>
    </div>
  );
}
