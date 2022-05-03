//1464. Maximum Product of Two Elements in an Array
package myapp;

import java.util.Collections;
import java.util.PriorityQueue;

public class MaxProduct {
	
	private static int max(int[] nums) {
		int sum = 1; 
		PriorityQueue<Integer> heap = new PriorityQueue<>(Collections.reverseOrder());
		
		for(int i=0; i<nums.length; i++) {
			heap.add(nums[i]);
		}
		
		for(int p= 0; p<2; p++) {
			sum = sum * ((heap.peek())-1);
			heap.poll();
		}
			return sum; 
	}

	public static void main(String[] args) {
		
		int [] nums = {3,4,5,2};
		System.out.println(MaxProduct.max(nums));

	}

}
