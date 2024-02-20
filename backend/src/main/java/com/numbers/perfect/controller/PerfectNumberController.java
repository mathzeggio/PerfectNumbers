package com.numbers.perfect.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/perfect-number")
public class PerfectNumberController {

    @GetMapping("/check/{number}")
    public boolean isPerfectNumber(@PathVariable int number) {
        return isPerfect(number);
    }

    @GetMapping("/range")
    public List<Integer> perfectNumbersInRange(@RequestParam("start") int start, @RequestParam("end") int end) {
        return IntStream.rangeClosed(start, end)
                .filter(this::isPerfect)
                .boxed()
                .collect(Collectors.toList());
    }

    private boolean isPerfect(int number) {
        if (number <= 1) {
            return false;
        }
        int sum = IntStream.rangeClosed(2, (int) Math.sqrt(number))
                .filter(i -> number % i == 0)
                .map(i -> {
                    int divisor = number / i;
                    return i == divisor ? i : i + divisor;
                })
                .sum() + 1;
        return sum == number;
    }
}
