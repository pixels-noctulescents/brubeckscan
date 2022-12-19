-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_userAddress_fkey";

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_userAddress_fkey" FOREIGN KEY ("userAddress") REFERENCES "User"("address") ON DELETE CASCADE ON UPDATE CASCADE;
