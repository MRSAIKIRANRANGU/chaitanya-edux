import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const boards = ["CBSE", "ICSE", "IGCSE", "STATE"];
const states = ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi", "Gujarat"];

const SchoolFinderSection = () => {
  return (
    <section className="relative -mt-8 z-30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border"
        >
          <div className="grid md:grid-cols-5 gap-4 items-end">
            {/* Board Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Select Board</label>
              <Select>
                <SelectTrigger className="h-12 bg-muted/50 border-border">
                  <SelectValue placeholder="Select Board" />
                </SelectTrigger>
                <SelectContent>
                  {boards.map((board) => (
                    <SelectItem key={board} value={board.toLowerCase()}>
                      {board}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* State Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Select State</label>
              <Select>
                <SelectTrigger className="h-12 bg-muted/50 border-border">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(" ", "-")}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* City Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Select City</label>
              <Select>
                <SelectTrigger className="h-12 bg-muted/50 border-border">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Branch Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Select Branch</label>
              <Select>
                <SelectTrigger className="h-12 bg-muted/50 border-border">
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branch1">Kukatpally</SelectItem>
                  <SelectItem value="branch2">Gachibowli</SelectItem>
                  <SelectItem value="branch3">Secunderabad</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button className="h-12 btn-accent gap-2">
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Find School</span>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-muted-foreground">Popular Locations:</span>
              {["Hyderabad", "Bangalore", "Chennai", "Delhi", "Mumbai"].map((city) => (
                <a
                  key={city}
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-secondary hover:text-gold transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  {city}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolFinderSection;
