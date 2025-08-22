import React from "react";
import Rating from "@mui/material/Rating";
import { useForm, Controller } from "react-hook-form";
import { useGetAllCategoriesQuery } from "../../api/categoryApi";
import { useAddProductMutation } from "../../api/productApi";

const AddProduct = () => {
  const { data: categories = [] } = useGetAllCategoriesQuery();
  const [addProduct] = useAddProductMutation();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      subCategory: "",
      price: "",
      oldPrice: "",
      isFeatured: "",
      brand: "",
      stock: "",
      discount: "",
      size: "",
      rating: 0,
      media: [],
    },
  });

  // 👀 Watch category select
  const selectedCategory = watch("category");

  // 🔎 Subcategories filter
  const subCategories =
    categories.find((cat) => cat._id === selectedCategory)?.subCategories || [];

  // 📌 Handle file input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setValue("media", files, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Text + Number fields
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("subCategory", data.subCategory);
      formData.append("price", data.price);
      formData.append("oldPrice", data.oldPrice);
      formData.append("isFeatured", data.isFeatured);
      formData.append("brand", data.brand);
      formData.append("stock", data.stock);
      formData.append("discount", data.discount);
      formData.append("size", data.size);
      formData.append("rating", data.rating);

      // Files append (multiple)
      if (data.media && data.media.length > 0) {
        data.media.forEach((file) => {
          formData.append("media", file);
        });
      }

      await addProduct(formData).unwrap();
      alert("✅ Product added successfully!");
    } catch (err) {
      console.error("❌ Error while adding product:", err);
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className="container py-3 bg-white add-product-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col">
            <label>Product Name</label>
            <input
              type="text"
              {...register("name", { required: "Product name is required" })}
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}

            <label className="mt-2">Product Description</label>
            <textarea
              {...register("description")}
              className="form-control"
            ></textarea>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-3">
            <label>Product Category</label>
            <select
              {...register("category", { required: "Select a category" })}
              className="form-select"
            >
              <option value="">-- Select --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3">
            <label>Product Sub Category</label>
            <select {...register("subCategory")} className="form-select">
              <option value="">-- Select --</option>
              {subCategories.map((sub, idx) => (
                <option key={idx} value={sub.subCategoryName}>
                  {sub.subCategoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3">
            <label>Product Price</label>
            <input
              type="number"
              {...register("price")}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <label>Product Old Price</label>
            <input
              type="number"
              {...register("oldPrice")}
              className="form-control"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-3">
            <label>Is Featured</label>
            <select {...register("isFeatured")} className="form-select">
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-3">
            <label>Product Brand</label>
            <input
              type="text"
              {...register("brand")}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <label>Product Stock</label>
            <input
              type="number"
              {...register("stock")}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <label>Product Discount (%)</label>
            <input
              type="number"
              {...register("discount")}
              className="form-control"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row mb-3">
          <div className="col-3">
            <label>Product Size</label>
            <select {...register("size")} className="form-select">
              <option value="">-- Select --</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="col-3">
            <label>Product Rating</label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating
                  {...field}
                  value={field.value || 0}
                  onChange={(_, value) => field.onChange(value)}
                />
              )}
            />
          </div>
        </div>

        {/* Row 5 - Media Upload */}
        <div className="row mb-3">
          <div className="col-6">
            <label>Media & Images</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-end">
            <button type="submit" className="btn btn-primary">
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
