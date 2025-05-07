import { Layout } from "@/components/layout"
import { DalleInterface } from "@/components/tool-interfaces/dalle-interface"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"

export default function DallePage() {
  return (
    <Layout>
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link href="/tools">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Tools
              </Button>
            </Link>
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Nch9eJ1T8wivxMA3Y3LnM7HVdE82M.png"
                alt="DALL·E logo"
                className="h-8 w-8 mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold">DALL·E 3</h1>
                <p className="text-sm text-gray-500">Create realistic images from text descriptions</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">1 credit per image</div>
            <Link href="/tools/dalle/info">
              <Button variant="outline" size="sm">
                <Info className="h-4 w-4 mr-1" /> About
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="create">
          <TabsList className="mb-6">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="variations">Variations</TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <DalleInterface />
          </TabsContent>
          <TabsContent value="edit">
            <div className="flex items-center justify-center h-64 border rounded-lg bg-gray-50">
              <p className="text-gray-500">Image editing coming soon</p>
            </div>
          </TabsContent>
          <TabsContent value="variations">
            <div className="flex items-center justify-center h-64 border rounded-lg bg-gray-50">
              <p className="text-gray-500">Image variations coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
