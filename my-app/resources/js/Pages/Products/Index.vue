<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';

defineProps({
    products: Array,
});
</script>

<template>
    <Head title="Products" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex items-center justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Products</h2>
                <Button as-child>
                    <Link :href="route('products.create')">
                        Add Product
                    </Link>
                </Button>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <div v-if="products.length === 0" class="text-center text-gray-500 py-6">
                        No products found. Start by adding one!
                    </div>
                    
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="product in products" :key="product.id" class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ product.name }}</h3>
                            <p class="text-gray-600 mb-4">{{ product.description }}</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-green-600">${{ product.price }}</span>
                                <span class="text-sm text-gray-400">#{{ product.id }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
