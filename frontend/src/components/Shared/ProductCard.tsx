import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/services/cart/cartSlice";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Get parts of the date
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // e.g., "January"
  const year = date.getFullYear();

  // Return the formatted date
  return `${month} ${day}, ${year}`;
};

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export function ProductCard({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        stock: product.stock,
        imageUrl: product.imageUrl as string,
      })
    );
  };

  return (
    <div className="mx-auto p-10">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image */}
        <div className=" w-full">
          <img
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            className="rounded-lg object-cover object-center aspect-square w-full h-full"
          />
        </div>

        {/* Product details */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Rating */}
          <div className="mt-3 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(4) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">({4} reviews)</span>
          </div>

          <div className="mt-5">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-5">
            <div className="mt-2 flex items-center">
              <p className="text-sm text-gray-500">In stock:</p>
              <p className="ml-2 text-sm font-medium text-gray-900">
                {product.stock} units
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <p className="text-sm text-gray-500">Added:</p>
              <p className="ml-2 text-sm font-medium text-gray-900">
                {formatDate(product.createdAt)}
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <p className="text-sm text-gray-500">Last updated:</p>
              <p className="ml-2 text-sm font-medium text-gray-900">
                {formatDate(product.updatedAt)}
              </p>
            </div>
          </div>

          <div className="mt-6 flex ">
            <Button onClick={() => handleAddToCart()} className="w-full">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
